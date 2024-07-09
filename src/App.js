import FComponent from "./components/FComponent";
import CComponent from "./components/CComponent";
import State from "./components/State";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import Style from "./components/Style";
import './AppStyle.css';
import styles from './App.module.css';
import Form from "./components/Form";
import Fragment from "./components/Fragment";
import Table from "./components/Table";


function App() {
  return (
    <div className="App">
      {/*  functional component */}

       {/* <FComponent /> */}

       {/* == functional component with props == */}

      {/* <FComponent name="firstValue" address="Kilima hewa"> 
        <p>Inside of functional component</p>
      </FComponent>
      <FComponent name="SecondValue"/>
      <FComponent name="thridValue"/> */}

      {/* == class component == */}
      {/* <CComponent /> */}

      {/* == class component with props == */}

      {/* <CComponent address="First address">
        <p>Child inside of class component</p>
      </CComponent>

      <CComponent address="Second address"/>
      <CComponent address="Third address"/> */}

      {/* <State/> */}

      {/* <Counter/> */}

      {/* <FunctionClick/> */}

      {/* <ClassClick/> */}

      {/* == css style == */}

      {/* <Style/> */}

      {/* <h4 className="error">This is an error </h4>
      <h4 className={styles.success}>This is sucess msg</h4> */}

      {/* == form == */}

      {/* <Form/> */}

      {/* fragment component  */}

      {/* <Fragment/> */}

      {/* table component */}

      <Table></Table>


    </div>
  );
}

export default App;
