import UpdateMember from "../components/UpdateMember";

const UpdatePage = props => (
  <div>
    <UpdateMember id={props.query.id} />
  </div>
);

export default UpdatePage;
