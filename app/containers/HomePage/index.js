/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import useSWR, { mutate } from 'swr'

//const fetcher = url => fetch(url).then(r => r.json())
const fetcher = url => fetch(url).then(res => res.json());

function getData2(){
  const { data, error } = useSWR(
    "https://api.github.com/repos/vercel/swr",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  return (
    <div>
      {JSON.stringify(data)}
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}

function getData(){
  
  const fetcher = url => fetch(url).then(res => res.json());
  const url='http://localhost:3001/service_work_record/list';
  const { data, error } = useSWR(url,fetcher);
  if (error) return <div>{error}</div>
  if (!data) return <div>loading...</div>
  return <div>{JSON.stringify(data)}!</div>
}


export default function HomePage() {
  const x=getData();
  return (
    <h>
      {x}
    </h>
  );

}
