import React from 'react';
import Link from 'next/link';
const Header = ({children}) => {
  return (<div>
    <ul>
      <Link href={'/'}><li>Main</li></Link>
      <Link href={'/about'}><li>About</li></Link>
      <Link href={'/users'}><li>Users</li></Link>
      <Link href={'/user/123'}><li>User/123</li></Link>
      <Link href={'/posts'}><li>Posts</li></Link>
      <Link href={'/posts/info'}><li>Posts/info</li></Link>
      <Link href={'/posts/123/item/456'}><li>Posts/123/item/456</li></Link>
    </ul>
    <main>
      {children}
    </main>
  </div>)
}

export default Header;
