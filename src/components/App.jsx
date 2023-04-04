// import Profile from "./Profile";
import ProfileList from "./ProfileList";
import Section from './Section';
import user from '../user.json';

export default function App() {
  return (<div>
    <Section>
      <ProfileList items={user}></ProfileList>
    </Section>
      

  </div>)
}
