/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div >
        <img src={props.img_src} alt="Project Logo" className="headerLogo_cus" height="50%" width="25%"/>
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        
        <div className="inner">
          <Logo img_src={`${baseUrl}img/cohen-logo.png`} />
          <ProjectTitle siteConfig={siteConfig} />
          {/* <PromoSection>
            <Button href="#try">Try It Out</Button>
            <Button href={docUrl('doc1.html')}>Example Link</Button>
            <Button href={docUrl('doc2.html')}>Example Link 2</Button>
          </PromoSection> */}
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom','top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const LynxApp = () => (
      <Block background="light" id='lynxApp'>
        {[
          {
            content:
              'Each new Docusaurus project has **randomly-generated** theme colors.',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'LYNX Application',
          },
        ]}
      </Block>
    );

    const LYNXAPI = () => (
      <Block id="lynxApi">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'LYNX API',
          },
        ]}
      </Block>
    );

    const JDE = () => (
      <Block background="dark" id="jde">
        {[
          {
            content:'This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'JDE',
          },
        ]}
      </Block>
    );

    const Mobile = () => (
      <Block id='mobile'>
        {[
          {
            content:
              'Each new Docusaurus project has **randomly-generated** theme colors.',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'left',
            title: 'Mobile Application',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'This is the content of my feature',
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            title: '<a href="#lynxApp">Lynx Application</a>',
          },
          {
            content: 'The content of my second feature',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: '<a href="#lynxApi">LYNX API</a>',
          },
          {
            content: 'This is the content of my feature',
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            title: '<a href="#jde">JD Edwards</a>',
          },
          {
            content: 'This is the content of my feature',
            image: `${baseUrl}img/mobile_logo.png`,
            imageAlign: 'top',
            title: '<a href="#mobile">Mobile App</a>',
          },
        ]}
      </Block>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <LynxApp />
          <LYNXAPI />
          <JDE />
          <Mobile />
        </div>
      </div>
    );
  }
}

module.exports = Index;
