import React, { Fragment } from 'react';
import './scss/app.scss';

import {AppProgressBar, AppTitleInfo, AppTestingBlock} from './components'

function App() {
    const [dataUser, setDataUser] = React.useState(false)
    const [questionProgress, setQuestionProgress] = React.useState(0)

    const setNewUser = (name, secondName, fatherName) => {
      setDataUser({
        name,
        secondName,
        fatherName
      })
    } 

    const setProgress = (progressData) => {
      setQuestionProgress(progressData)
    }


    
  return (
    <Fragment> 
      {!dataUser && <AppTitleInfo dataUserTaker = {setNewUser}/>}
      { dataUser && <Fragment> 
                      <AppProgressBar progress = {questionProgress}/>      
                      <AppTestingBlock progressCapture = {setProgress} userData= {dataUser}/>    
                    </Fragment>
      }
    </Fragment>
  );
}

export default App;
