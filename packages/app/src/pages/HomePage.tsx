
import React, { PropsWithChildren, ComponentProps } from 'react';

import { Link } from '../core_components/Link';
// import { Header } from '../../layout/Header';
import { HeaderLabel } from '../layout/HeaderLabel';
import { PageWithHeader } from '../layout/Page';
import { Page, Header, Content, TrendLine, GaugeCard } from '@backstage/core-components';
import { LineChart } from '../components'

import { renderInTestApp, TestApiProvider } from '@backstage/test-utils';
import { configApiRef } from '@backstage/core-plugin-api';
import { ConfigReader } from '@backstage/core-app-api';
// import {  } from '@backstage/core-components';

// import { Chart, LineSeries, Axis, Tooltip } from '@backstage/core-components';

const linkText = "링크 컴포넌트 테스트(네이버)"

const CustomGaugeCard = () => {
  return (
      <div style={{ height: '300px'}}>
        <GaugeCard
          title="GKE 사용 량"
          subheader="This should be above 75%"
          progress={0.87}
        />
      </div>
      
  )
}
          
const ExampleHeader = () => (
  <Header
    type="tool"
    title="커스텀 홈 헤더" 
    subtitle="커스텀 디자인 예시"
    style={{ background : 'blue'}}
  >
    <HeaderLabel label="Owner" value="홍길동" />
    <HeaderLabel label="Lifecycle" value="라이프" />
  </Header>
);

const TrendLineComponent = () => {
  return (
    <TrendLine
        data={[1, 0.3, 0.3, 0.6, 1, 0.3, 0.3, 0.6]}
        color="blue"
        title="임시 트렌드 데이터"
        style={{ width: '30vw' }}
      />
  );
};

export const HomePage = () => {
  const customOnClick = () => {
    console.log("온 클릭")
  }

  return (<div>

    <Page themeId="home">
      <ExampleHeader />
      <Content>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '100px' }}>
        <TrendLineComponent />
        </div>
        <div>
        <CustomGaugeCard />
        </div>
      </div>
        
      
      
      <br></br>
      {/* <TestApiProvider
        apis={[[configApiRef, new ConfigReader({ app: { title: 'Blah' } })]]}
      >
        <Header title="toll title" type="tool" typeLink="/tool" />,
      </TestApiProvider> */}
      <br />
      <br />
      <Link 
        style={{marginLeft: '20px', fontSize: '18px', fontWeight: 'bold'}}
        to="https://www.naver.com" 
        onClick={customOnClick} noTrack
      >
        {linkText}
      </Link>
      <br />
      <br />
      <Page themeId="tool">
        <Header title="Custom Catalog123" subtitle="This is a custom catalog page" />
        <Content>
          컨텐트          
          <LineChart
            label='라인그래프'
            width='600px'
            height='400px'
            // backgroundColor='red'
          />
        </Content>
      </Page>
      </Content>
    </Page>

    
  </div>)
};


/* We will shortly compose a pretty homepage here. */

// const isExternalUri = (uri: string) => /^([a-z+.-]+):/.test(uri);

// // See https://github.com/facebook/react/blob/f0cf832e1d0c8544c36aa8b310960885a11a847c/packages/react-dom-bindings/src/shared/sanitizeURL.js
// const scriptProtocolPattern =
//   // eslint-disable-next-line no-control-regex
//   /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;

// // We install this globally in order to prevent javascript: URL XSS attacks via window.open
// const originalWindowOpen = window.open as typeof window.open & {
//   __backstage?: true;
// };
// if (originalWindowOpen && !originalWindowOpen.__backstage) {
//   const newOpen = function open(
//     this: Window,
//     ...args: Parameters<typeof window.open>
//   ) {
//     const url = String(args[0]);
//     if (scriptProtocolPattern.test(url)) {
//       throw new Error(
//         'Rejected window.open() with a javascript: URL as a security precaution',
//       );
//     }
//     return originalWindowOpen.apply(this, args);
//   };
//   newOpen.__backstage = true;
//   window.open = newOpen;
// }

// const useResolvedPath = (uri: LinkProps['to']) => {
//   let resolvedPath = String(uri);

//   const basePath = useBasePath();
//   const external = isExternalUri(resolvedPath);
//   const startsWithBasePath = resolvedPath.startsWith(basePath);

//   if (!external && !startsWithBasePath) {
//     resolvedPath = basePath.concat(resolvedPath);
//   }

//   return resolvedPath;
// };
