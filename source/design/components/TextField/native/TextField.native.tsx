// Module ID: 6676
// Function ID: 58974
// Name: TextField
// Dependencies: [31, 33, 6677, 6678, 6682, 6685, 2]

// Module 6676 (TextField)
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const forwardRefResult = require("result").forwardRef((onClear) => {
  let innerRef;
  let inputStyle;
  let leading;
  let state;
  let trailing;
  let obj = require(6677) /* useTextFieldState */;
  const textField = obj.useTextField(onClear, arg1);
  ({ innerRef, state } = textField);
  const inputClearButtonConfig = require(6678) /* useInputClearButtonConfig */.useInputClearButtonConfig(onClear, state);
  let tmp3;
  if (null != inputClearButtonConfig) {
    obj = {};
    ({ content: obj3.trailing, pressableProps: obj3.trailingPressableProps } = inputClearButtonConfig);
    tmp3 = obj;
  }
  const obj2 = require(6678) /* useInputClearButtonConfig */;
  const inputAttachments = require(6682) /* estimateAttachmentWidth */.useInputAttachments(onClear, tmp3);
  ({ leading, trailing, inputStyle } = inputAttachments);
  obj = {};
  const merged = Object.assign(textField.inputProps);
  obj["ref"] = innerRef;
  obj["leading"] = leading;
  obj["trailing"] = trailing;
  obj["inputStyle"] = inputStyle;
  return jsx(require(6685) /* collapseNewlines */.BaseTextField, {});
});
const result = require("useTextFieldState").fileFinishedImporting("design/components/TextField/native/TextField.native.tsx");

export const TextField = forwardRefResult;
