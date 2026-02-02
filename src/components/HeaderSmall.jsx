const HeaderSmall = function (props) {
  console.log("PROPS", props);
  return (
    <div>
      <h4>{props.text}</h4>
    </div>
  );
};

export default HeaderSmall;
