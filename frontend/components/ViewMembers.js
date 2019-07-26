import React from "react";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import Table from "./styles/Table";
import PropTypes from "prop-types";
import Link from "next/link";
import debounce from "lodash.debounce";

const memberInfo = [
  "firstName",
  "middleName",
  "lastName",
  "birthDate",
  "streetAddress",
  "city",
  "state",
  "zip",
  "landLine",
  "cellPhone",
  "email"
];

const ALL_MEMBERS_QUERY = gql`
  query {
    members {
      id
      firstName
      middleName
      lastName
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

const SEARCH_MEMBERS_QUERY = gql`
  query SEARCH_MEMBERS_QUERY($searchTerm: String) {
    members(
      where: {
        OR: [
          { firstName_contains: $searchTerm }
          { middleName_contains: $searchTerm }
          { lastName_contains: $searchTerm }
          { streetAddress_contains: $searchTerm }
          { city_contains: $searchTerm }
          { state_contains: $searchTerm }
          { zip_contains: $searchTerm }
          { email_contains: $searchTerm }
        ]
      }
      orderBy: lastName_ASC
    ) {
      id
      firstName
      middleName
      lastName
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

class ViewMembers extends React.Component {
  state = {
    members: [],
    searchTerm: "",
    loading: false,
    loaded: false
  };
  onChange = debounce(async e => {
    //turn on loading.
    this.setState({ loading: true, searchTerm: e.target.value });
  }, 350);
  render() {
    return (
      <>
        <Query
          query={
            this.state.searchTerm === ""
              ? ALL_MEMBERS_QUERY
              : SEARCH_MEMBERS_QUERY
          }
          variables={
            this.state.searchTerm === ""
              ? null
              : { searchTerm: this.state.searchTerm }
          }
          pollInterval={1000}
        >
          {({ loading, error, data, refetch }) => {
            if (error) return <p>Error: {error.message}</p>;
            return (
              <div>
                <input
                  type="search"
                  placeholder="Search For A Member"
                  id="search"
                  onChange={e => {
                    e.persist();
                    this.onChange(e);
                    refetch();
                  }}
                />

                <h2>Manage Members</h2>
                <Table>
                  <thead>
                    <tr>
                      {memberInfo.map(info => (
                        <th key={info}>{info}</th>
                      ))}
                      <th>Modify</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.members &&
                      data.members.map(member => (
                        <MemberDisplay member={member} key={member.id} />
                      ))}
                  </tbody>
                </Table>
              </div>
            );
          }}
        </Query>
      </>
    );
  }
}

class MemberDisplay extends React.Component {
  static propTypes = {
    member: PropTypes.shape({
      id: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      birthDate: PropTypes.string,
      landPhone: PropTypes.string,
      cellPhone: PropTypes.string,
      email: PropTypes.string
    })
  };
  state = {
    info: this.props.member.info
  };
  render() {
    const member = this.props.member;
    return (
      <tr>
        <td>{member.firstName}</td>
        <td>{member.middleName}</td>
        <td>{member.lastName}</td>
        <td>{member.birthDate && member.birthDate.slice(0, 10)}</td>
        <td>{member.streetAddress}</td>
        <td>{member.city}</td>
        <td>{member.state}</td>
        <td>{member.zip}</td>
        <td>{member.landPhone}</td>
        <td>{member.cellPhone}</td>
        <td>{member.email}</td>
        <td>
          <Link
            href={{
              pathname: "update",
              query: { id: member.id }
            }}
          >
            <a>Edit ✏️</a>
          </Link>
        </td>
      </tr>
    );
  }
}

export default ViewMembers;
export { ALL_MEMBERS_QUERY };
