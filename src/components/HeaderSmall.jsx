const HeaderSmall = function (props) {
  console.log("PROPS", props);
  return (
    <div>
      <h4>{props.label}</h4>
    </div>
  );
};

export default HeaderSmall;
