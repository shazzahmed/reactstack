import logo from './logo.svg';
import './App.css';
import PageContainer from './components/PageContainer/PageContainer.component';
import HomePage from './pages/HomePage/HomePage.component';
import withPageTitle from './services/withPageTitle';

const HomePageComponent = withPageTitle({
  component: PageContainer({ component: HomePage }),
  title: 'CLONE Stack Overflow - Where Developers Learn, Share, & Build Careers'
});
function App() {
  return (
    <div className='App' >
      <HomePageComponent />
      {/* <PageContainer component = {HomePage} /> */}
      {/* <Header/>
      <Alert/>
      <Routes /> */}
    </div >
  );
}

export default App;
