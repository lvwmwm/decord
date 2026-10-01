// Module ID: 9038
// Function ID: 9039
// Name: void/TextInput/TextInput
// Dependencies: [19, 17, 1074, 21, 4836, 576, 4685, 1364, 4683, 2]

// Module 9038 (void/TextInput/TextInput)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import ColorUtils from "ColorUtils" /* 4683 */;
import shared from "shared" /* 4685 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let style;

let Fonts;
let closure_4;
let obj2;
let obj3;
const TextInput = react_native.TextInput;
({ KeyboardThemes: closure_4, Fonts } = Constants);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { input: obj2, placeholderTextColor: obj3 };
obj2 = { fontSize: 16, alignSelf: "center", fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.TEXT_DEFAULT };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
let closure_6 = createStyles(obj);
const forwardRefResult = react.forwardRef((style, ref) => {
  let hexWithOpacityResult;
  let items;
  let tmp3Result;
  style = style.style;
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  const tmp2 = closure_6();
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = shared;
  const isThemeDarkResult = obj2.isThemeDark(theme);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  const tmp6 = isThemeDarkResult ? unsafe_rawColors.PRIMARY_100 : unsafe_rawColors.PRIMARY_500;
  const obj3 = { ref, style: items, keyboardAppearance: tmp3Result.isThemeDark(theme) ? React3.DARK : React3.LIGHT, placeholderTextColor: tmp2.placeholderTextColor.color, selectionColor: hexWithOpacityResult };
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
forwardRefResult.displayName = "VoidTextInput";
const result = size.fileFinishedImporting("design/void/TextInput/native/TextInput.tsx");

export default forwardRefResult;
