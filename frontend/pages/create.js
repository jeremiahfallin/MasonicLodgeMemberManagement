import CreateMember from "../components/CreateMember";
import PleaseSignIn from "../components/PleaseSignIn";

const CreateMemberPage = props => (
  <div>
    <PleaseSignIn>
      <CreateMember />
    </PleaseSignIn>
  </div>
);

export default CreateMemberPage;
