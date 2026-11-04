// Module ID: 7281
// Function ID: 7282
// Name: AuthFormView
// Dependencies: [19, 17, 21, 5141, 575, 7257, 7282, 7283, 7090, 7284, 2]
// Exports: default

// Module 7281 (AuthFormView)
import nativeDefault from "native" /* 575 */;
import useWideAuthViewDefault from "useWideAuthView" /* 7257 */;
import react2 from "react" /* 7282 */;
import AuthNavbarPlaceholderDefault from "AuthNavbarPlaceholder" /* 7284 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles((arg0) => {
  let num2;
  let num3;
  let num4;
  let num5;
  let obj3;
  let num = 0;
  const obj = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, flex: { flex: 1 }, content: obj3, subHeader: { marginTop: 8, alignItems: "center" } };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 });
  if (arg0) {
    num = 12;
  }
  obj3 = { paddingTop: num, paddingRight: num2, paddingLeft: num3, paddingBottom: num4, flex: num5 };
  num2 = 16;
  if (arg0) {
    num2 = 24;
  }
  num3 = 16;
  if (arg0) {
    num3 = 24;
  }
  num4 = 0;
  if (arg0) {
    num4 = 16;
  }
  num5 = 1;
  if (arg0) {
    num5 = 0;
  }
  return obj;
});
const result = size.fileFinishedImporting("modules/auth/native/components/AuthFormView.tsx");

export default function AuthFormView(arg0) {
  let background;
  let backgroundImageCover;
  let backgroundImageSource;
  let children;
  let contentStyle;
  let headerText;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let subHeader;
  let tmp5Result;
  ({ children, headerText, subHeader, contentStyle, background } = arg0);
  ({ backgroundImageSource, backgroundImageCover } = arg0);
  const tmp3 = useWideAuthViewDefault();
  const tmp4 = closure_8(tmp3);
  let closure_0 = react.useContext(react2.WideAuthScrollContext);
  if (tmp3) {
    const obj2 = {
      contentInset: { top: 0 },
      automaticallyAdjustContentInsets: false,
      keyboardShouldPersistTaps: "handled",
      alwaysBounceVertical: false,
      scrollEventThrottle: 16,
      onScroll(nativeEvent) {
          return closure_0(nativeEvent.nativeEvent.contentOffset.y > 0);
        },
      style: tmp4.container,
      contentContainerStyle: items,
      children: items1
    };
    items = [tmp4.content, contentStyle];
    let tmp16 = null;
    const tmp14 = hasOwnProperty;
    if (null != headerText) {
      const obj3 = { children: headerText };
      tmp16 = metroRequire(tmp(7283), obj3);
    }
    items1 = [tmp16, , ];
    let tmp18 = null;
    if (null != subHeader) {
      const obj4 = { style: tmp4.subHeader, children: subHeader };
      tmp18 = metroRequire(React3, obj4);
    }
    items1[1] = tmp18;
    items1[2] = children;
    tmp5Result = tmp5(tmp14, obj2);
  } else {
    const obj = { style: items2, children: items3 };
    items2 = [, ];
    ({ container: arr[0], flex: arr[1] } = tmp4);
    if (background == null) {
      const obj5 = { backgroundImageSource, backgroundImageCover };
      background = metroRequire(tmp(7090), obj5);
    }
    items3 = [background, metroRequire(AuthNavbarPlaceholderDefault, {}), ];
    const obj6 = { contentInset: { top: 0 }, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, style: tmp4.flex, contentContainerStyle: items4, children: items5 };
    items4 = [, , ];
    ({ content: arr3[0], flex: arr3[1] } = tmp4);
    items4[2] = contentStyle;
    let tmp9Result = null;
    const tmp10 = hasOwnProperty;
    if (null != headerText) {
      const obj7 = { children: headerText };
      tmp9Result = tmp9(tmp(7283), obj7);
    }
    items5 = [tmp9Result, , ];
    let tmp9Result2 = null;
    if (null != subHeader) {
      const obj8 = { style: tmp4.subHeader, children: subHeader };
      tmp9Result2 = tmp9(tmp6, obj8);
    }
    items5[1] = tmp9Result2;
    items5[2] = children;
    items3[2] = metroImportDefault(tmp10, obj6);
    tmp5Result = tmp5(tmp6, obj);
  }
  return tmp5Result;
};
