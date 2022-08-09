import React,{ useContext } from "react";
import { MyContext } from '../context';
import Spinner from 'react-bootstrap/Spinner';

const Stage2 = () => {

  const context = useContext(MyContext);

  return (
    <>
      <div className="result_wrapper">
        <h3>the Looser is:</h3>
        <div>
          { context.state.result || <Spinner animation="grow" variant="primary" autoclose="2000"/>
          }
          
        </div>
      </div>
      <div className="action_button" onClick={()=> context.reset()}>
        Start over
      </div>
      <div className="action_button btn_2" onClick={()=> context.newlooser() }>
        Get new looser
      </div>
    </>
  );
}

export default Stage2;