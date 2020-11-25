import React from 'react';
import Link from 'next/link';
import Router from 'next/router'
import Header from '../components/Header';
export default function Users() {
console.log('Router', Router);

  function clickNavHandler() {
    console.log('clickNavHandler');
    Router.push('/');
  }

  return (
    <Header>
      <div>
        Users page
      </div>
      <div onClick={clickNavHandler}>Program navigation, Click Me</div>
    </Header>
   )
}
