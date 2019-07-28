import React, { Component } from "react";
import Error from "./ErrorMessage";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import Form from "./styles/Form";
import faker from "faker";

const memberInfo = [
  "firstName",
  "middleName",
  "lastName",
  "birthDate",
  "streetNumber",
  "streetName",
  "city",
  "state",
  "zip",
  "landLine",
  "cellPhone",
  "email"
];

const CREATE_MEMBER_MUTATION = gql`
  mutation CREATE_MEMBER_MUTATION(
    $firstName: String!
    $lastName: String!
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
    createMember(
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
    }
  }
`;

class CreateMember extends Component {
  state = {
    firstName: "",
    lastName: "",
    middleName: "",
    birthDate: null,
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
    landPhone: "",
    cellPhone: "",
    email: ""
  };
  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };
  generateData = e => {
    this.setState({
      firstName: faker.name.firstName(),
      lastName: faker.name.firstName(),
      middleName: faker.name.lastName(),
      birthDate: null,
      streetAddress: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      zip: faker.address.zipCode(),
      landPhone: "",
      cellPhone: "",
      email: faker.internet.email()
    });
  };

  render() {
    return (
      <Mutation mutation={CREATE_MEMBER_MUTATION} variables={this.state}>
        {(createMember, { loading, error }) => (
          <>
            <Form
              onSubmit={async e => {
                e.preventDefault();
                const res = await createMember();
                this.setState({
                  firstName: "",
                  lastName: "",
                  middleName: "",
                  birthDate: "",
                  streetAddress: "",
                  city: "",
                  state: "",
                  zip: "",
                  landPhone: "",
                  cellPhone: "",
                  email: ""
                });
                Router.push({
                  pathname: "/view"
                });
              }}
            >
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
                    value={this.state.firstName}
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
                    value={this.state.middleName}
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
                    value={this.state.lastName}
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
                    value={this.state.birthDate}
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
                    value={this.state.streetAddress}
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
                    value={this.state.city}
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
                    value={this.state.state}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="zip">
                  Zip
                  <input
                    type="text"
                    pattern="[0-9-]*"
                    id="zip"
                    name="zip"
                    placeholder="Zip"
                    value={this.state.zip}
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
                    value={this.state.landPhone}
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
                    value={this.state.cellPhone}
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
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </label>

                <button type="submit">Submit</button>
              </fieldset>
            </Form>
            <button type="submit" onClick={this.generateData}>
              Generate
            </button>
          </>
        )}
      </Mutation>
    );
  }
}

export default CreateMember;
export { CREATE_MEMBER_MUTATION };
