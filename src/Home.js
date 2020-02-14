import React from 'react';
import { Button, Layout } from 'antd';
import './App.css';
import config from './config';

const client_id = config.clientId;
const redirect_uri = encodeURIComponent('http://localhost:3000/callback');
const twitchURl = `https://id.twitch.tv/oauth2/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=token`;


export default function Home() {
  return (  
    <div>
      <Layout>
        <Layout.Header className="header"></Layout.Header>
          <Layout.Content style={{ padding: '0 50px' }}>
          <div style={{ padding: 24, background: '#fff'}}>Bill is a cat.
              <h1>Please Sign into Twitch to access this site</h1>
              <Button style={{backgroundColor: "#9146FF", borderColor: "#9146FF"}} type="primary" href={twitchURl}>Sign in with Twitch</Button>
          </div>
          </Layout.Content>
  
      </Layout>
    </div>
  );
}