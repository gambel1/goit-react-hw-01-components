import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import { Section } from 'components/Section/Section.styled';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';


export default function App() {
  return (
    <>
      <Section>
      <Profile
        ImageSrc={user.avatar}
        userName={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      </Section>

      <Section>
      <Statistics
        title='Upload stats'
        stats={data}
        />
      </Section>
      
      <Section>
      <FriendList
        friends={friends}
        />
      </Section>
      
      <Section>
      <TransactionHistory
      items={transactions}
      />
      </Section>
    </>
  );
}



