// Module ID: 8418
// Function ID: 66964
// Name: TwinButtons
// Dependencies: [31, 27, 33, 4130, 689, 4549, 4543, 2]
// Exports: TwinButtons

// Module 8418 (TwinButtons)
import result from "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let require = arg1;
let closure_6 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = {};
  let str = "row";
  if (arg0) {
    str = "column";
  }
  obj.flexDirection = str;
  const space = importDefault(689).space;
  obj.gap = arg0 ? space.PX_8 : space.PX_12;
  obj.container = obj;
  obj.button = { flex: 1 };
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("design/components/experimental/Button/native/TwinButtons.native.tsx");

export const TwinButtons = function TwinButtons(children) {
  let obj = require(4549) /* getFontScale */;
  let tmp = callback(obj.useFontScale() > 1.2);
  require = tmp;
  obj = {
    style: tmp.container,
    children: Children.map(children.children, (type) => {
      let tmp = null;
      if (outer1_3.isValidElement(type)) {
        tmp = null;
        if (type.type === tmp(outer1_2[6]).Button) {
          const obj = { style: tmp.button, children: type };
          tmp = outer1_5(outer1_4, obj);
        }
      }
      return tmp;
    })
  };
  Children = React.Children;
  return <View style={tmp.container}>{Children.map(arg0.children, (type) => {
    let tmp = null;
    if (outer1_3.isValidElement(type)) {
      tmp = null;
      if (type.type === tmp(outer1_2[6]).Button) {
        const obj = { style: tmp.button, children: type };
        tmp = outer1_5(outer1_4, obj);
      }
    }
    return tmp;
  })}</View>;
};
