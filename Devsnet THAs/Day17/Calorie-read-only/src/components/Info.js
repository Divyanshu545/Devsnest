const Info = (props) => {
    return (
      <>
        <div className="content">
          <h1>{props.name}</h1>
          <h2>you have consumed {props.cal} calls today</h2>
        </div>
      </>
    );
  };
  
  export default Info;