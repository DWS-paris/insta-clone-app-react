/* 
  [CMP] React.js
  Define main import to generate compoenent
*/
  // Import Router modules
  import { Routes, Route } from 'react-router-dom';

  // Import route components
  import HomeView from './views/HomeView';
  import DashboardView from './views/DashboardView';
  import SnapshootView from './views/SnapshootView';

  // Import child component
  import HeaderApp from './components/main/HeaderApp';
  import FooterApp from './components/main/FooterApp';

  // Main App style
  import './assets/css/main.css';
//

/* 
  [CMP] Definition
  Set component controller
*/
  function App() {
    return (
      <div className="insta-clone-app-react">
        {/* Display HeaderApp component */}        
        <HeaderApp />

        <main>
          {/* Use the 'Routes' directive define App router */}
          <Routes>
            {/* Use the 'Route' directive to set one single route */}
            <Route path="/" element={ <HomeView /> } />
            <Route path="/dashboard" element={ <DashboardView /> } />
            <Route path="/snapshoot" element={ <SnapshootView /> } />
          </Routes>
        </main>

        {/* Display FooterApp component */}        
        <FooterApp />
      </div>
    );
  }
//

/* 
  [CMP] Export
  Populate component
*/
  export default App;
//