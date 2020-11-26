import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Header from '../components/Header';

export default function Users({users}) {
  console.log('==== users ==== ', users);
  console.log('Router', Router);

  function clickNavHandler() {
    console.log('clickNavHandler');
    Router.push('/');
  }

  return (
    <Header>
      <div>
        Users page
        <ul>
          {users.map((el) => {
            return (
              <li key={el.id}>
                <Link href={`/user/${el.id}`}>
                  <a>
                    {el.name} with id - {el.id}
                  </a>
                </Link>
              </li>
            );
          }
          )}
        </ul>
      </div>
      <button onClick={clickNavHandler}>Program navigation, Click Me</button>
    </Header>
  );
}


export async function getStaticProps(ctx) {
  console.log('[][][][[][][][][]', ctx);
  const res = await fetch('http://localhost:4000/users');
  const users = await res.json();
  return {
    props: {
      users
    }
  };
}

