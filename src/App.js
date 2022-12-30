import './App.css';

const container = {
  backgroundColor: '#FFE9F9',
  flex: 1,
  color: '#c80000',
  display: 'flex',
  justifyContent: 'center',
};

const headerContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  margin: '10%',
};

const headerText = {
  color: '#C80000',
  fontSize: 120,
  margin: 0,
};

const subHeaderText = {
  fontSize: 20,
  marginBottom: '30%',
};

const appNameText = {
  fontSize: 36,
  alignSelf: 'flex-start',
  marginBottom: 5,
  marginTop: 0,
};

function App() {
  return (
    <div style={container} className='App'>
      <div style={headerContainer}>
        <p style={headerText}>r street labs</p>
        <p style={subHeaderText}>applications built for mobile</p>
        <p style={appNameText}>divii</p>
        <p style={appNameText}>juju</p>
        <p style={appNameText}>libris log</p>
      </div>
    </div>
  );
}

export default App;
