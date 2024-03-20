import { Layout } from 'antd';
import React from 'react';
import './App.css';
import SrchOption from './srchOption';
import SrchColumn from './srchColumn';
import whitePaperLogo from './whitePaperLogo.png';

const { Header, Footer, Sider, Content } = Layout;

const App = () => (
  <>
    <Layout>

      <Header>
        <div className="logo">
      <img src={whitePaperLogo} alt="Logo" />
      </div>
      </Header>


      <Content style={{ padding: '0 100px' }}>
      
      <div className="site-layout-content">
        {/* <SrchOption /> */}

        <div className="logoColumn">
      <img src={whitePaperLogo} alt="Logo" />
      </div>

        <SrchColumn />
      </div>
      </Content>
      <Footer>@copyrights@whitepaper.com</Footer>
    </Layout>

    
  </>
);
export default App;