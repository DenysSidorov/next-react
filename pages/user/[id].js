import {useRouter} from 'next/router';
import Header from '../../components/Header';

const isServer = () => typeof window === 'undefined'

export default function UserId({user}) {
  const router = useRouter();
  const { isFallback } = router;
  console.log('router', router);
  console.log('user', user);
  console.log('isFallback', isFallback);
  if (!user) return <div>Loading</div>


  if (isFallback) {
    return <div>Loading1</div>
  }


  return (
    <Header>
      <>
        <div>User with id: {router.query.id}</div>
        <div>User DB info: name - {user.name} with id - {user.id}</div>
      </>
    </Header>
  );
}
// UserId.
// getStaticProps
export async function getServerSideProps({params, req}) {
  console.log('isServer');
  if (!isServer) return null;
  const {id} = params;
  const res = await fetch(`http://localhost:4000/users/${id}`);
  const user = await res.json();
  return {
    props: {
      user
    }
  };
}
