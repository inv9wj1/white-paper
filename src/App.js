
import './App.css';
import axiosConnect from './api/axiosConnect';
import AppHeader from './appHeader';




function App() {
  const loadFileSpaceData = () => {
    console.log('method calling....');
    
    axiosConnect.get('/getFileData2', {
        params: {
            fileName: "SYSEIM.OPSMVS.IPLCHECK.IVPS.ERRMSG.TPLA"
        },
        headers: {
            'Access-Control-Allow-Origin': '*', // Replace * with your allowed origins
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization', // Add more headers if needed
        }
    })
    .then(response => {
      
        console.log(response);
        console.log("Data received from getFileSpaceData: " + response.data);
        
    })
    .catch(err => {
        //handle error
        console.log(err);
        // setCommandOutput("Error while getting the Files Directory: " + fullCommand);
        // handleOnLoading(false);
    });
};



  return (
    //  <button onClick={loadFileSpaceData}>Call My Method</button>
    <AppHeader />

  );
}
export default App;
