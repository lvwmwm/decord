// Module ID: 8367
// Function ID: 66687
// Name: TwinButtons
// Dependencies: [45154304, 102039552, 325189632, 357105664, 360382464, 325386240, 492437504, 492371968]
// Exports: TwinButtons

// Module 8367 (TwinButtons)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_6 = arg1(dependencyMap[3]).createStyles((arg0) => {
  let obj = {};
  obj = {};
  let str = "row";
  if (arg0) {
    str = "column";
  }
  obj.flexDirection = str;
  const space = importDefault(dependencyMap[4]).space;
  obj.gap = arg0 ? space.PX_8 : space.PX_12;
  obj.container = obj;
  obj.button = { flex: 1 };
  return obj;
});
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("design/components/experimental/Button/native/TwinButtons.native.tsx");

export const TwinButtons = function TwinButtons(children) {
  let obj = arg1(dependencyMap[5]);
  const tmp = callback(obj.useFontScale() > 1.2);
  const arg1 = tmp;
  obj = {
    style: tmp.container,
    children: Children.map(children.children, (type) => {
      let tmp = null;
      if (validElement.isValidElement(type)) {
        tmp = null;
        if (type.type === tmp(closure_2[6]).Button) {
          const obj = { style: tmp.button, children: type };
          tmp = callback(closure_4, obj);
        }
      }
      return tmp;
    })
  };
  const Children = React.Children;
  return <View {...obj} />;
};
