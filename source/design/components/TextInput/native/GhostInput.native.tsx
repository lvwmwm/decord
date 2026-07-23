// Module ID: 13082
// Function ID: 100823
// Name: GhostInput
// Dependencies: [31, 33, 4130, 4126, 689, 5780, 5774, 7505, 5783, 2]
// Exports: GhostInput

// Module 13082 (GhostInput)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_4 = _createForOfIteratorHelperLoose.createStyles(() => {
  let str = arg0;
  let str2 = arg1;
  if (arg0 === undefined) {
    str = "lg";
  }
  if (str2 === undefined) {
    str2 = "default";
  }
  let obj = {};
  obj = {};
  obj = { md: require(4126) /* Text */.TextStyleSheet["text-md/semibold"], lg: require(4126) /* Text */.TextStyleSheet["text-lg/semibold"] };
  const merged = Object.assign(obj[str]);
  if ("error" === str2) {
    let TEXT_DEFAULT = importDefault(689).colors.TEXT_FEEDBACK_CRITICAL;
  } else {
    TEXT_DEFAULT = importDefault(689).colors.TEXT_DEFAULT;
  }
  obj["color"] = TEXT_DEFAULT;
  obj["minWidth"] = 48;
  obj.input = obj;
  obj.centeredContainerStyle = { alignItems: "center" };
  return obj;
});
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/TextInput/native/GhostInput.native.tsx");

export const GhostInput = function GhostInput(size) {
  let obj = require(5780) /* useInputStyles */;
  obj = { size: size.size };
  const inputStyles = obj.useInputStyles(obj);
  const tmp2 = callback(size.size, size.status);
  const isCentered = size.isCentered;
  const autoFocus = size.autoFocus;
  const textField = require(5774) /* useTextFieldState */.useTextField(size, undefined);
  obj = {};
  const merged = Object.assign(size);
  const items = [size.containerStyle, ];
  let prop;
  if (tmp3) {
    prop = tmp2.centeredContainerStyle;
  }
  items[1] = prop;
  obj["containerStyle"] = items;
  const obj1 = {};
  const merged1 = Object.assign(textField.inputProps);
  obj1["ref"] = textField.innerRef;
  const items1 = [tmp2.input];
  obj1["style"] = items1;
  obj1["placeholderTextColor"] = inputStyles.placeholderText.color;
  obj1["spellCheck"] = false;
  obj1["autoFocus"] = undefined === autoFocus || autoFocus;
  obj["children"] = jsx(require(5783) /* useKeyboardBlurring */.NativeTextInput, {});
  return jsx(require(7505) /* Input */.Input, {});
};
