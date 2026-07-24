// Module ID: 8471
// Function ID: 67387
// Name: VoidTextInput
// Dependencies: [31, 27, 653, 33, 4130, 689, 3976, 477, 3974, 2]

// Module 8471 (VoidTextInput)
import { TextInput } from "get ActivityIndicator";
import ME from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
const KeyboardThemes = ME.KeyboardThemes;
let obj = {};
obj = { fontSize: 16, alignSelf: "center", fontFamily: ME.Fonts.PRIMARY_MEDIUM, color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
obj.input = obj;
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
obj.placeholderTextColor = _createForOfIteratorHelperLoose;
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
const forwardRefResult = require("result").forwardRef((style, ref) => {
  let obj = Object.create(null);
  obj.style = 0;
  const merged = Object.assign(style, obj);
  const tmp3 = callback();
  obj = require(3976) /* AccessibilityAnnouncer */;
  const theme = obj.useThemeContext().theme;
  const obj2 = require(3976) /* AccessibilityAnnouncer */;
  const unsafe_rawColors = importDefault(689).unsafe_rawColors;
  const tmp5 = require(3976) /* AccessibilityAnnouncer */.isThemeDark(theme) ? unsafe_rawColors.PRIMARY_100 : unsafe_rawColors.PRIMARY_500;
  obj = { ref, style: items };
  items = [tmp3.input, style.style];
  const isThemeDarkResult = require(3976) /* AccessibilityAnnouncer */.isThemeDark(theme);
  const tmp6 = jsx;
  const tmp7 = TextInput;
  obj.keyboardAppearance = require(3976) /* AccessibilityAnnouncer */.isThemeDark(theme) ? KeyboardThemes.DARK : KeyboardThemes.LIGHT;
  obj.placeholderTextColor = tmp3.placeholderTextColor.color;
  const obj4 = require(3976) /* AccessibilityAnnouncer */;
  let hexWithOpacityResult = tmp5;
  if (obj5.isAndroid()) {
    hexWithOpacityResult = require(3974) /* hexToRgb */.hexWithOpacity(tmp5, 0.5);
    const obj6 = require(3974) /* hexToRgb */;
  }
  obj.selectionColor = hexWithOpacityResult;
  const merged1 = Object.assign(merged);
  return tmp6(tmp7, obj);
});
forwardRefResult.displayName = "VoidTextInput";
const result = require("ME").fileFinishedImporting("design/void/TextInput/native/TextInput.tsx");

export default forwardRefResult;
