// Module ID: 9219
// Function ID: 72131
// Name: AuthFormView
// Dependencies: [31, 27, 33, 4130, 689, 9197, 9220, 9221, 9222, 9225, 2]
// Exports: default

// Module 9219 (AuthFormView)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_4, ScrollView: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOW, flex: 1 };
  let num = 1;
  obj.container = obj;
  obj.flex = { flex: 1 };
  obj = {};
  let num2 = 0;
  if (arg0) {
    num2 = 12;
  }
  obj.paddingTop = num2;
  let num3 = 16;
  if (arg0) {
    num3 = 24;
  }
  obj.paddingRight = num3;
  let num4 = 16;
  if (arg0) {
    num4 = 24;
  }
  obj.paddingLeft = num4;
  let num5 = 0;
  if (arg0) {
    num5 = 16;
  }
  obj.paddingBottom = num5;
  if (arg0) {
    num = 0;
  }
  obj.flex = num;
  obj.content = obj;
  obj.subHeader = { marginTop: 8, alignItems: "center" };
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/auth/native/components/AuthFormView.tsx");

export default function AuthFormView(arg0) {
  let backgroundImageCover;
  let backgroundImageSource;
  let children;
  let contentStyle;
  let headerText;
  let subHeader;
  ({ children, headerText, subHeader, contentStyle } = arg0);
  ({ backgroundImageSource, backgroundImageCover } = arg0);
  const tmp = importDefault(9197)();
  const tmp2 = callback2(tmp);
  _require = React.useContext(_require(9220).WideAuthScrollContext);
  if (tmp) {
    let obj = { contentInset: null, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, scrollEventThrottle: 16 };
    obj = { top: 0 };
    obj.contentInset = obj;
    obj.onScroll = function onScroll(nativeEvent) {
      return callback(nativeEvent.nativeEvent.contentOffset.y > 0);
    };
    obj.style = tmp2.container;
    const items = [tmp2.content, contentStyle];
    obj.contentContainerStyle = items;
    let tmp20 = null;
    if (null != headerText) {
      const obj1 = { children: headerText };
      tmp20 = callback(importDefault(9221), obj1);
    }
    const items1 = [tmp20, , ];
    let tmp24 = null;
    if (null != subHeader) {
      const obj2 = { style: tmp2.subHeader, children: subHeader };
      tmp24 = callback(closure_4, obj2);
    }
    items1[1] = tmp24;
    items1[2] = children;
    obj.children = items1;
    let tmp3Result = tmp3(closure_5, obj);
    const tmp18 = closure_5;
  } else {
    obj = {};
    const items2 = [, ];
    ({ container: arr[0], flex: arr[1] } = tmp2);
    obj.style = items2;
    const obj3 = { backgroundImageSource, backgroundImageCover };
    const items3 = [callback(importDefault(9222), obj3), callback(importDefault(9225), {}), ];
    const obj4 = { contentInset: null, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false };
    const obj5 = { top: 0 };
    obj4.contentInset = obj5;
    obj4.style = tmp2.flex;
    const items4 = [, , ];
    ({ content: arr3[0], flex: arr3[1] } = tmp2);
    items4[2] = contentStyle;
    obj4.contentContainerStyle = items4;
    let tmp10 = null;
    if (null != headerText) {
      const obj6 = { children: headerText };
      tmp10 = callback(importDefault(9221), obj6);
    }
    const items5 = [tmp10, , ];
    let tmp14 = null;
    if (null != subHeader) {
      const obj7 = { style: tmp2.subHeader, children: subHeader };
      tmp14 = callback(closure_4, obj7);
    }
    items5[1] = tmp14;
    items5[2] = children;
    obj4.children = items5;
    items3[2] = tmp3(closure_5, obj4);
    obj.children = items3;
    tmp3Result = tmp3(closure_4, obj);
    const tmp4 = closure_4;
    const tmp8 = closure_5;
  }
  return tmp3Result;
};
