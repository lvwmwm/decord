// Module ID: 6391
// Function ID: 6392
// Name: AuthFormView
// Dependencies: [19, 17, 21, 4836, 576, 6363, 6392, 6393, 6394, 6397, 2]
// Exports: default

// Module 6391 (AuthFormView)
import nativeDefault from "native" /* 576 */;
import useWideAuthViewDefault from "useWideAuthView" /* 6363 */;
import react2 from "react" /* 6392 */;
import BackgroundImageDefault from "BackgroundImage" /* 6394 */;
import AuthNavbarPlaceholderDefault from "AuthNavbarPlaceholder" /* 6397 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
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
  ({ children, headerText, subHeader, contentStyle } = arg0);
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
    let tmp15 = null;
    const tmp13 = hasOwnProperty;
    if (null != headerText) {
      const obj3 = { children: headerText };
      tmp15 = metroRequire(tmp(6393), obj3);
    }
    items1 = [tmp15, , ];
    let tmp17 = null;
    if (null != subHeader) {
      const obj4 = { style: tmp4.subHeader, children: subHeader };
      tmp17 = metroRequire(React3, obj4);
    }
    items1[1] = tmp17;
    items1[2] = children;
    tmp5Result = tmp5(tmp13, obj2);
  } else {
    const obj = { style: items2, children: items3 };
    items2 = [, ];
    ({ container: arr[0], flex: arr[1] } = tmp4);
    const obj5 = { backgroundImageSource, backgroundImageCover };
    items3 = [metroRequire(BackgroundImageDefault, obj5), metroRequire(AuthNavbarPlaceholderDefault, {}), ];
    const obj6 = { contentInset: { top: 0 }, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, style: tmp4.flex, contentContainerStyle: items4, children: items5 };
    items4 = [, , ];
    ({ content: arr3[0], flex: arr3[1] } = tmp4);
    items4[2] = contentStyle;
    let tmp7Result = null;
    const tmp8 = hasOwnProperty;
    if (null != headerText) {
      const obj7 = { children: headerText };
      tmp7Result = tmp7(tmp(6393), obj7);
    }
    items5 = [tmp7Result, , ];
    let tmp7Result2 = null;
    if (null != subHeader) {
      const obj8 = { style: tmp4.subHeader, children: subHeader };
      tmp7Result2 = tmp7(tmp6, obj8);
    }
    items5[1] = tmp7Result2;
    items5[2] = children;
    items3[2] = metroImportDefault(tmp8, obj6);
    tmp5Result = tmp5(tmp6, obj);
  }
  return tmp5Result;
};
