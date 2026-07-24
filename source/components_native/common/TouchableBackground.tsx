// Module ID: 11453
// Function ID: 89061
// Name: TouchableBackground
// Dependencies: [57, 31, 27, 33, 4130, 689, 2]
// Exports: default

// Module 11453 (TouchableBackground)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_2;
let closure_3;
({ View: closure_2, Pressable: closure_3 } = get_ActivityIndicator);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_BACKGROUND_ACTIVE };
_createForOfIteratorHelperLoose.default = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("components_native/common/TouchableBackground.tsx");

export default function TouchableBackground(onPressOut) {
  let activeBackgroundColor;
  let children;
  let onPressIn;
  let pressableStyle;
  let style;
  ({ activeBackgroundColor, onPressIn } = onPressOut);
  onPressOut = onPressOut.onPressOut;
  let obj = { activeBackgroundColor: 0, pressableStyle: 0, style: 0, children: 0, onPressIn: 0, onPressOut: 0 };
  ({ pressableStyle, style, children } = onPressOut);
  Object.setPrototypeOf(null);
  const merged = Object.assign(onPressOut, obj);
  const tmp4 = onPressIn(onPressOut.useState(false), 2);
  let first = tmp4[0];
  let closure_2 = tmp4[1];
  const items = [onPressIn];
  const items1 = [onPressOut];
  const callback = onPressOut.useCallback((arg0) => {
    callback(true);
    if (null != onPressIn) {
      onPressIn(arg0);
    }
  }, items);
  obj = { accessibilityRole: "button", style: pressableStyle };
  const callback1 = onPressOut.useCallback((arg0) => {
    if (null != onPressOut) {
      onPressOut(arg0);
    }
    callback(false);
  }, items1);
  const merged1 = Object.assign(merged);
  obj["onPressIn"] = callback;
  obj["onPressOut"] = callback1;
  obj = {};
  const items2 = [style, ];
  if (first) {
    const obj1 = {};
    if (null == activeBackgroundColor) {
      activeBackgroundColor = tmp3.default.backgroundColor;
    }
    obj1.backgroundColor = activeBackgroundColor;
    first = obj1;
  }
  items2[1] = first;
  obj.style = items2;
  obj.children = children;
  obj["children"] = <closure_2 />;
  return <closure_3 />;
};
