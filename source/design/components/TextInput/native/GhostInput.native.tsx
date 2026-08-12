// Module ID: 13488
// Function ID: 13489
// Name: GhostInput
// Dependencies: [19, 21, 4344, 4340, 712, 6041, 6035, 7832, 6044, 2]
// Exports: GhostInput

// Module 13488 (GhostInput)
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_4 = createCacheKey.createStyles(() => {
  let str = arg0;
  if (arg0 === undefined) {
    str = "lg";
  }
  let str2 = arg1;
  if (arg1 === undefined) {
    str2 = "default";
  }
  const input = {};
  const merged = Object.assign({ md: require(4340) /* Text */.TextStyleSheet["text-md/semibold"], lg: require(4340) /* Text */.TextStyleSheet["text-lg/semibold"] }[str]);
  if ("error" === str2) {
    let TEXT_DEFAULT = importDefault(712).colors.TEXT_FEEDBACK_CRITICAL;
  } else {
    TEXT_DEFAULT = importDefault(712).colors.TEXT_DEFAULT;
  }
  input.color = TEXT_DEFAULT;
  input.minWidth = 48;
  return { input, centeredContainerStyle: { alignItems: "center" } };
});
const result = require("createCacheKey").fileFinishedImporting("design/components/TextInput/native/GhostInput.native.tsx");

export const GhostInput = function GhostInput(size) {
  let obj = require(6041) /* useInputStyles */;
  obj = { size: size.size };
  const inputStyles = obj.useInputStyles(obj);
  const tmp4 = callback(size.size, size.status);
  const isCentered = size.isCentered;
  const autoFocus = size.autoFocus;
  const textField = require(6035) /* useTextFieldState */.useTextField(size, undefined);
  obj = {};
  const merged = Object.assign(size);
  const items = [size.containerStyle, ];
  let prop;
  if (tmp5) {
    prop = tmp4.centeredContainerStyle;
  }
  items[1] = prop;
  obj.containerStyle = items;
  const obj1 = {};
  const merged1 = Object.assign(textField.inputProps);
  obj1.ref = textField.innerRef;
  const items1 = [tmp4.input];
  obj1.style = items1;
  obj1.placeholderTextColor = inputStyles.placeholderText.color;
  obj1.spellCheck = false;
  obj1.autoFocus = undefined === autoFocus || autoFocus;
  obj.children = jsx(require(6044) /* useKeyboardBlurring */.NativeTextInput, {});
  return jsx(require(7832) /* Input */.Input, {});
};
