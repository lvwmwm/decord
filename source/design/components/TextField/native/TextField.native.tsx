// Module ID: 6712
// Function ID: 59064
// Name: TextField
// Dependencies: [31, 33, 6713, 6714, 6718, 6721, 2]

// Module 6712 (TextField)
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const forwardRefResult = require("result").forwardRef((onClear) => {
  let innerRef;
  let inputStyle;
  let leading;
  let state;
  let trailing;
  let obj = require(6713) /* useTextFieldState */;
  const textField = obj.useTextField(onClear, arg1);
  ({ innerRef, state } = textField);
  const inputClearButtonConfig = require(6714) /* useInputClearButtonConfig */.useInputClearButtonConfig(onClear, state);
  let tmp3;
  if (null != inputClearButtonConfig) {
    obj = {};
    ({ content: obj3.trailing, pressableProps: obj3.trailingPressableProps } = inputClearButtonConfig);
    tmp3 = obj;
  }
  const obj2 = require(6714) /* useInputClearButtonConfig */;
  const inputAttachments = require(6718) /* estimateAttachmentWidth */.useInputAttachments(onClear, tmp3);
  ({ leading, trailing, inputStyle } = inputAttachments);
  obj = {};
  const merged = Object.assign(textField.inputProps);
  obj["ref"] = innerRef;
  obj["leading"] = leading;
  obj["trailing"] = trailing;
  obj["inputStyle"] = inputStyle;
  return jsx(require(6721) /* collapseNewlines */.BaseTextField, {});
});
const result = require("useTextFieldState").fileFinishedImporting("design/components/TextField/native/TextField.native.tsx");

export const TextField = forwardRefResult;
