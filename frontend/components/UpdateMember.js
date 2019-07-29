import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";
import Form from "./styles/Form";
import Error from "./ErrorMessage";
import ALL_MEMBERS_QUERY from "./ViewMembers";

const SINGLE_MEMBER_QUERY = gql`
  query SINGLE_MEMBER_QUERY($id: ID!) {
    member(where: { id: $id }) {
      id
      firstName
      lastName
      middleName
      birthDate
      streetAddress
      city
      state
      zip
      landPhone
      cellPhone
      email
    }
  }
`;

const UPDATE_MEMBER_MUTATION = gql`
  mutation UPDATE_ITEM_MUTATION(
    $id: ID!
    $firstName: String
    $lastName: String
    $middleName: String
    $birthDate: DateTime
    $streetAddress: String
    $city: String
    $state: String
    $zip: String
    $landPhone: String
    $cellPhone: String
    $email: String
  ) {
    updateMember(
      id: $id
      firstName: $firstName
      lastName: $lastName
      middleName: $middleName
      birthDate: $birthDate
      streetAddress: $streetAddress
      city: $city
      state: $state
      zip: $zip
      landPhone: $landPhone
      cellPhone: $cellPhone
      email: $email
    ) {
      id
      firstName
      lastName
      middleName
      birthDate
      streetAddress
      city
      state
      zip
      landPhone
      cellPhone
      email
    }
  }
`;

const DELETE_MEMBER_MUTATION = gql`
  mutation DELETE_MEMBER_MUTATION($id: ID!) {
    deleteMember(id: $id) {
      id
    }
  }
`;

class UpdateMember extends Component {
  state = {};
  update = (cache, payload) => {
    // manually update the cache on the client, so it matches the server
    // 1. Read the cache for the items we want
    const data = cache.readQuery({ query: ALL_MEMBERS_QUERY });
    console.log(data, payload);
    // 2. Filter the deleted itemout of the page
    data.members = data.members.filter(
      member => member.id !== payload.data.deleteMember.id
    );
    // 3. Put the items back!
    cache.writeQuery({ query: ALL_MEMBERS_QUERY, data });
  };
  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };
  updateMember = async (e, updateMemberMutation) => {
    e.preventDefault();
    console.log(this.state);
    const res = await updateMemberMutation({
      variables: {
        id: this.props.id,
        ...this.state
      }
    });
    console.log("Updated!");
  };

  render() {
    return (
      <Query
        query={SINGLE_MEMBER_QUERY}
        variables={{
          id: this.props.id
        }}
      >
        {({ data, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (!data.member)
            return <p>No member found for ID {this.props.id}</p>;
          return (
            <Mutation mutation={UPDATE_MEMBER_MUTATION} variables={this.state}>
              {(updateMember, { loading, error }) => (
                <Form onSubmit={e => {if(confirm('Are you sure you want to update?')) {this.updateMember(e, updateMember)}}}>
                  <Error error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                    <label htmlFor="firstName">
                      First Name
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        required
                        defaultValue={data.member.firstName}
                        onChange={this.handleChange}
                      />
                    </label>
                    <label htmlFor="middleName">
                      Middle Name
                      <input
                        type="text"
                        id="middleName"
                        name="middleName"
                        placeholder="Middle Name"
                        defaultValue={data.member.middleName}
                        onChange={this.handleChange}
                      />
                    </label>
                    <label htmlFor="lastName">
                      Last Name
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        required
                        defaultValue={data.member.lastName}
                        onChange={this.handleChange}
                      />
                    </label>
                    <label htmlFor="birthDate">
                      Date of Birth
                      <input
                        type="date"
                        id="birthDate"
                        name="birthDate"
                        placeholder="Birth Date"
                        defaultValue={data.member.birthdate && data.member.birthDate.slice(0, 10)}
                        onChange={this.handleChange}
                      />
                    </label>

                    <label htmlFor="streetAddress">
                      Street Address
                      <input
                        type="text"
                        id="streetAddress"
                        name="streetAddress"
                        placeholder="Street Address"
                        defaultValue={data.member.streetAddress}
                        onChange={this.handleChange}
                      />
                    </label>
                    <label htmlFor="city">
                      City
                      <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="City"
                        defaultValue={data.member.city}
                        onChange={this.handleChange}
                      />
                    </label>
                    <label htmlFor="state">
                      State
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="State"
                        defaultValue={data.member.state}
                        onChange={this.handleChange}
                      />
                    </label>
                    <label htmlFor="zip">
                      Zip
                      <input
                        type="number"
                        id="zip"
                        name="zip"
                        placeholder="Zip"
                        defaultValue={data.member.zip}
                        onChange={this.handleChange}
                      />
                    </label>

                    <label htmlFor="landPhone">
                      Landline (Format: 123-456-7890)
                      <input
                        type="tel"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        id="landPhone"
                        name="landPhone"
                        placeholder="Land Phone"
                        defaultValue={data.member.landPhone}
                        onChange={this.handleChange}
                      />
                    </label>
                    <label htmlFor="cellPhone">
                      Cell Phone (Format: 123-456-7890)
                      <input
                        type="tel"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        id="cellPhone"
                        name="cellPhone"
                        placeholder="Cell Phone"
                        defaultValue={data.member.cellPhone}
                        onChange={this.handleChange}
                      />
                    </label>
                    <label htmlFor="email">
                      Email
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        defaultValue={data.member.email}
                        onChange={this.handleChange}
                      />
                    </label>

                    <button type="submit">Submit</button>

                    <Mutation
                      mutation={DELETE_MEMBER_MUTATION}
                      variables={{ id: this.props.id }}
                      update={this.update}
                    >
                      {(deleteMember, { error }) => (
                        <button
                          onClick={() => {
                            if (
                              confirm(
                                "Are you sure you want to delete this member?"
                              )
                            ) {
                              deleteMember().catch(err => {
                                alert(err.message);
                              });
                            }
                          }}
                        >
                          Delete Member
                        </button>
                      )}
                    </Mutation>
                  </fieldset>
                </Form>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default UpdateMember;
export { UPDATE_MEMBER_MUTATION };
