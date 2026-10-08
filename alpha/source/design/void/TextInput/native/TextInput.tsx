// Module ID: 8603
// Function ID: 8604
// Name: void/TextInput/TextInput
// Dependencies: [109, 19, 17, 1085, 21, 5090, 587, 558, 576, 4929, 1381, 4927, 2]

// Module 8603 (void/TextInput/TextInput)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import ColorUtils from "ColorUtils" /* 4927 */;
import shared from "shared" /* 4929 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let Fonts;
let metroRequire;
let obj2;
let obj3;
let closure_3 = ["style", "ref"];
const TextInput = react_native.TextInput;
({ KeyboardThemes: metroRequire, Fonts } = Constants);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { input: obj2, placeholderTextColor: obj3 };
obj2 = { fontSize: 16, alignSelf: "center", fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.TEXT_DEFAULT };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
let closure_8 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function VoidTextInput(arg0) {
  let ref;
  let style;
  let tmp4;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(16);
  if (cResult[0] !== arg0) {
    ({ style, ref } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = tmp9;
    cResult[2] = ref;
    cResult[3] = style;
    tmp6 = style;
    tmp5 = ref;
    tmp4 = tmp9;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  const tmp10 = closure_8();
  const tmpResult = shared;
  const theme = tmpResult.useThemeContext().theme;
  const tmpResult5 = shared;
  const isThemeDarkResult = tmpResult5.isThemeDark(theme);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  const tmp12 = isThemeDarkResult ? unsafe_rawColors.PRIMARY_100 : unsafe_rawColors.PRIMARY_500;
  if (cResult[4] === tmp6) {
    let tmp13;
    let tmp16;
    if (cResult[5] === tmp10.input) {
      tmp13 = cResult[6];
    }
    const tmpResult6 = shared;
    const tmp15 = tmpResult6.isThemeDark(theme) ? metroRequire.DARK : metroRequire.LIGHT;
    if (cResult[7] !== tmp12) {
      let hexWithOpacityResult = tmp12;
      const tmpResult7 = PlatformUtils;
      if (tmpResult7.isAndroid()) {
        const tmpResult8 = ColorUtils;
        hexWithOpacityResult = tmpResult8.hexWithOpacity(tmp12, 0.5);
      }
      cResult[7] = tmp12;
      cResult[8] = hexWithOpacityResult;
      tmp16 = hexWithOpacityResult;
    } else {
      tmp16 = cResult[8];
    }
    if (cResult[9] === tmp4) {
      if (cResult[10] === tmp5) {
        if (cResult[11] === tmp10.placeholderTextColor.color) {
          if (cResult[12] === tmp13) {
            if (cResult[13] === tmp15) {
              let tmp18;
              if (cResult[14] === tmp16) {
                tmp18 = cResult[15];
              }
              return tmp18;
            }
          }
        }
      }
    }
    const merged = Object.assign(tmp4);
    const tmp24 = <TextInput ref={tmp5} style={tmp13} keyboardAppearance={tmp15} placeholderTextColor={tmp10.placeholderTextColor.color} selectionColor={tmp16} />;
    cResult[9] = tmp4;
    cResult[10] = tmp5;
    cResult[11] = tmp10.placeholderTextColor.color;
    cResult[12] = tmp13;
    cResult[13] = tmp15;
    cResult[14] = tmp16;
    cResult[15] = tmp24;
    tmp18 = tmp24;
  }
  const items = [tmp10.input, tmp6];
  cResult[4] = tmp6;
  cResult[5] = tmp10.input;
  cResult[6] = items;
  tmp13 = items;
}) : (function VoidTextInput(arg0) {
  let hexWithOpacityResult;
  let items;
  let ref;
  let style;
  let tmp3Result;
  ({ style, ref } = arg0);
  const merged = Object.assign(arg0, Object.assign({ style: 0, ref: 0 }));
  const tmp2 = closure_8();
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = shared;
  const isThemeDarkResult = obj2.isThemeDark(theme);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  const tmp6 = isThemeDarkResult ? unsafe_rawColors.PRIMARY_100 : unsafe_rawColors.PRIMARY_500;
  const obj3 = { ref, style: items, keyboardAppearance: tmp3Result.isThemeDark(theme) ? metroRequire.DARK : metroRequire.LIGHT, placeholderTextColor: tmp2.placeholderTextColor.color, selectionColor: hexWithOpacityResult };
  items = [tmp2.input, style];
  hexWithOpacityResult = tmp6;
  tmp3Result = shared;
  const tmp3Result3 = PlatformUtils;
  const tmp7 = jsx;
  const tmp8 = TextInput;
  if (tmp3Result3.isAndroid()) {
    const tmp3Result4 = ColorUtils;
    hexWithOpacityResult = tmp3Result4.hexWithOpacity(tmp6, 0.5);
  }
  const merged1 = Object.assign(merged);
  return tmp7(tmp8, obj3);
});
tmp5.displayName = "VoidTextInput";
const result = size.fileFinishedImporting("design/void/TextInput/native/TextInput.tsx");

export default tmp5;
