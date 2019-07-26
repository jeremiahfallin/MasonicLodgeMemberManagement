import ViewMembers from "../components/ViewMembers";
import PleaseSignIn from "../components/PleaseSignIn";

const ViewPage = props => (
  <div>
    <PleaseSignIn>
      <ViewMembers />
    </PleaseSignIn>
  </div>
);

export default ViewPage;
