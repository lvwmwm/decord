// Module ID: 9217
// Function ID: 72126
// Name: SplitTextField
// Dependencies: [31, 27, 33, 5780, 5774, 5775, 5779, 5782, 2]

// Module 9217 (SplitTextField)
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import importAllResult from "result";

let closure_2;
let closure_3;
const require = arg1;
({ Pressable: closure_2, View: closure_3 } = get_ActivityIndicator);
const forwardRefResult = require("result").forwardRef((size) => {
  let innerRef;
  let inputStyle;
  let state;
  let trailing;
  let obj = require(5780) /* useInputStyles */;
  obj = { size: size.size, isRound: size.isRound };
  const inputStyles = obj.useInputStyles(obj);
  let obj2 = require(5774) /* useTextFieldState */;
  const textField = obj2.useTextField(size, arg1);
  ({ innerRef, state } = textField);
  let obj3 = require(5775) /* useInputClearButtonConfig */;
  const inputClearButtonConfig = obj3.useInputClearButtonConfig(size, state);
  let tmp4;
  if (null != inputClearButtonConfig) {
    obj = {};
    ({ content: obj5.trailing, pressableProps: obj5.trailingPressableProps } = inputClearButtonConfig);
    tmp4 = obj;
  }
  const inputAttachments = require(5779) /* estimateAttachmentWidth */.useInputAttachments(size, tmp4);
  let tmp6 = null;
  ({ trailing, inputStyle } = inputAttachments);
  if (null != size.leadingText) {
    tmp6 = null;
    if (size.leadingText.length > 0) {
      const obj1 = { style: inputStyles.splitBorder };
      obj2 = {
        style(pressed) {
              let tmp;
              if (pressed.pressed) {
                const obj = { opacity: 0.2 };
                tmp = obj;
              }
              const items = [tmp];
              return items;
            }
      };
      const merged = Object.assign(size.leadingPressableProps);
      obj2["children"] = require(5779) /* estimateAttachmentWidth */.renderInputAttachment(undefined, size.leadingText, inputStyles.text);
      obj1.children = <closure_2 style={function style(pressed) {
        let tmp;
        if (pressed.pressed) {
          const obj = { opacity: 0.2 };
          tmp = obj;
        }
        const items = [tmp];
        return items;
      }} />;
      tmp6 = <closure_3 style={inputStyles.splitBorder} />;
      const obj9 = require(5779) /* estimateAttachmentWidth */;
    }
  }
  obj3 = {};
  const merged1 = Object.assign(textField.inputProps);
  obj3["ref"] = innerRef;
  obj3["leading"] = tmp6;
  obj3["trailing"] = trailing;
  obj3["inputStyle"] = inputStyle;
  return jsx(require(5782) /* collapseNewlines */.BaseTextField, {});
});
const result = require("jsxProd").fileFinishedImporting("design/components/SplitTextInput/native/SplitTextField.native.tsx");

export const SplitTextField = forwardRefResult;
