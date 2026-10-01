// Module ID: 11869
// Function ID: 11870
// Name: TouchableBackground
// Dependencies: [32, 19, 17, 21, 4836, 576, 2]
// Exports: default

// Module 11869 (TouchableBackground)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let obj2;
({ View: c2, Pressable: c3 } = react_native);
const jsx = Fragment.jsx;
const obj = { default: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("components_native/common/TouchableBackground.tsx");

export default function TouchableBackground(onPressOut) {
  let activeBackgroundColor;
  let c2;
  let children;
  let onPressIn;
  let pressableStyle;
  let style;
  let tmp4;
  ({ activeBackgroundColor, onPressIn } = onPressOut);
  onPressOut = onPressOut.onPressOut;
  ({ pressableStyle, style, children } = onPressOut);
  const merged = Object.assign(onPressOut, Object.assign({ activeBackgroundColor: 0, pressableStyle: 0, style: 0, children: 0, onPressIn: 0, onPressOut: 0 }));
  c2 = undefined;
  const tmp2 = closure_5();
  [tmp4, c2] = _slicedToArray(react.useState(false), 2);
  const items = [onPressIn];
  const items1 = [onPressOut];
  const tmp3 = _slicedToArray(react.useState(false), 2);
  const callback = react.useCallback((arg0) => {
    _undefined(true);
    if (onPressIn != null) {
      tmp2(arg0);
    }
  }, items);
  const callback1 = react.useCallback((arg0) => {
    if (onPressOut != null) {
      tmp(arg0);
    }
    _undefined(false);
  }, items1);
  const merged1 = Object.assign(merged);
  const items2 = [style, ];
  if (tmp4) {
    if (activeBackgroundColor == null) {
      activeBackgroundColor = tmp2.default.backgroundColor;
    }
    tmp4 = { backgroundColor: activeBackgroundColor };
  }
  items2[1] = tmp4;
  return <tmp8 accessibilityRole="button" style={pressableStyle} onPressIn={callback} onPressOut={callback1}><tmp10 style={items2}>{children}</tmp10></tmp8>;
};
