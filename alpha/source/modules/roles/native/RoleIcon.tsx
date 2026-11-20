// Module ID: 7441
// Function ID: 7442
// Name: RoleIcon
// Dependencies: [19, 17, 21, 1378, 5481, 5385, 2]
// Exports: default

// Module 7441 (RoleIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5481 */;
import react from "react" /* 19 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import size_mod from "module_2" /* 2 */;

let tmp;
const Text_Text = tmp(5385);
const View = react_native.View;
const jsx = Fragment.jsx;
let num = 0.9375;
if (PlatformUtils.isAndroid()) {
  num = 0.8125;
}
let c6 = 1.25;
let size = size_mod;
let result = size.fileFinishedImporting("modules/roles/native/RoleIcon.tsx");

export default function RoleIcon(layout) {
  let items1;
  let num2;
  let obj4;
  let result;
  let result1;
  let src;
  let unicodeEmoji;
  ({ src, unicodeEmoji, size } = layout);
  if (size === undefined) {
    size = 20;
  }
  let str = layout.layout;
  if (str === undefined) {
    str = "inline";
  }
  const obj = PlatformUtils;
  let isIOSResult = obj.isIOS();
  if (isIOSResult) {
    isIOSResult = "pill" === str;
  }
  const size1 = { height: size, width: size };
  let str3 = "System";
  if (isIOSResult) {
    str3 = "system-ui";
  }
  const obj2 = { fontFamily: str3, fontSize: result, lineHeight: "Array", textAlign: "center", width: result1, marginBottom: num2 };
  if (isIOSResult) {
    result = size / c6;
  } else {
    result = size * num;
  }
  if (isIOSResult) {
    obj4 = { height: size * c6, paddingTop: size / 6 };
    const obj3 = { height: size * c6, paddingTop: size / 6 };
  } else {
    obj4 = {};
  }
  const merged = Object.assign(obj4);
  result1 = size;
  if (isIOSResult) {
    result1 = size * c6;
  }
  num2 = -2;
  if (isIOSResult) {
    num2 = 0;
  }
  if (null != src) {
    const obj6 = { uri: src };
    return jsx(FastImageDefault, { resizeMode: "contain", source: obj6, style: size1 });
  } else if (null != unicodeEmoji) {
    let num3;
    const Text = Text_Text.Text;
    if (isIOSResult) {
      num3 = 1;
    }
    const items = [size1, obj2];
    const tmp11Result = <Text lineClamp={num3} allowFontScaling={false} color="none" style={items} variant="body-lg/normal">{unicodeEmoji.surrogates}</Text>;
    let tmp11Result2 = tmp11Result;
    if (isIOSResult) {
      const obj8 = { style: items1, children: tmp11Result };
      items1 = [size1, { alignItems: "center", justifyContent: "center" }];
      tmp11Result2 = tmp11(View, obj8);
    }
    return tmp11Result2;
  } else {
    return null;
  }
};
