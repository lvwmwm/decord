// Module ID: 13095
// Function ID: 101026
// Name: MenuGroup
// Dependencies: [31, 27, 33, 4130, 689, 2]

// Module 13095 (MenuGroup)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let StyleSheet;
let closure_1;
let closure_2;
let closure_3;
({ StyleSheet, View: closure_1 } = get_ActivityIndicator);
({ jsx: closure_2, jsxs: closure_3 } = jsxProd);
let obj = {};
obj = { marginLeft: 0, height: StyleSheet.hairlineWidth, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginTop: -1 * StyleSheet.hairlineWidth };
obj.divider = obj;
let closure_4 = _createForOfIteratorHelperLoose.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((arg0, arg1) => {
  let children;
  let style;
  ({ style, children } = arg0);
  let obj = { style };
  let tmp5 = !tmp4;
  if (null === arg1) {
    obj = { style: tmp.divider };
    tmp5 = callback(closure_1, obj);
  }
  const items = [tmp5, ];
  const Children = arg1.Children;
  items[1] = Children.map(children, (icon) => {
    let cloneElementResult = icon;
    if (0 === arg1) {
      cloneElementResult = icon;
      if (closure_0.isValidElement(icon)) {
        const obj = { ref: closure_0 };
        cloneElementResult = closure_0.cloneElement(icon, obj);
      }
    }
    return cloneElementResult;
  });
  obj.children = items;
  return closure_3(closure_1, obj);
});
const result = require("jsxProd").fileFinishedImporting("design/components/Menu/native/MenuGroup.tsx");

export const MenuGroup = forwardRefResult;
