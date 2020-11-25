import {useRouter} from 'next/router';
import Header from '../../components/Header';

export default function UserId() {
  const router = useRouter();
  console.log('router', router);
  return (
    <Header>
      <div>User with id: {router.query.id}</div>
    </Header>
  );
}
