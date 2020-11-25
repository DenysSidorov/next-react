import {useRouter} from 'next/router';

export default function UserId() {
  const router = useRouter();
  console.log('router', router);
  return <div>User with id: {router.query.id}</div>
}
