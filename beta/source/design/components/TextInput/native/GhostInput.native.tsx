// Module ID: 13988
// Function ID: 13989
// Name: GhostInput
// Dependencies: [109, 19, 21, 4836, 4832, 576, 6039, 4549, 6032, 6025, 6042, 6356, 6026, 2]
// Exports: GhostInput

// Module 13988 (GhostInput)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useFieldLabelA11yNative from "useFieldLabelA11yNative" /* 4549 */;
import Text_Text from "Text/Text" /* 4832 */;
import getRequiredFieldA11yName from "getRequiredFieldA11yName" /* 6026 */;
import useTextField from "useTextField" /* 6032 */;
import InputFieldContainer from "InputFieldContainer" /* 6039 */;
import _objectWithoutProperties2 from "_objectWithoutProperties" /* 6356 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_3 = ["labelId", "accessibilityLabel"];
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles(() => {
  let TEXT_DEFAULT;
  let str = arg0;
  if (arg0 === undefined) {
    str = "lg";
  }
  let str2 = arg1;
  if (arg1 === undefined) {
    str2 = "default";
  }
  const input = { color: TEXT_DEFAULT, minWidth: 48 };
  const obj = { md: Text_Text.TextStyleSheet["text-md/semibold"], lg: Text_Text.TextStyleSheet["text-lg/semibold"] };
  const merged = Object.assign(obj[str]);
  if ("error" === str2) {
    TEXT_DEFAULT = nativeDefault.colors.TEXT_FEEDBACK_CRITICAL;
  } else {
    TEXT_DEFAULT = nativeDefault.colors.TEXT_DEFAULT;
  }
  return { input, centeredContainerStyle: { alignItems: "center" } };
});
const result = size.fileFinishedImporting("design/components/TextInput/native/GhostInput.native.tsx");

export const GhostInput = function GhostInput(size) {
  let innerRef;
  let inputProps;
  const obj = InputFieldContainer;
  const obj2 = { size: size.size };
  const inputStyles = obj.useInputStyles(obj2);
  const tmp4 = closure_6(size.size, size.status);
  const autoFocus = size.autoFocus;
  const centered = size.centered;
  let tmp6 = undefined === centered;
  const required = size.required;
  const tmp5 = undefined === autoFocus || autoFocus;
  if (!tmp6) {
    tmp6 = centered;
  }
  const tmpResult = useFieldLabelA11yNative;
  const fieldLabelA11yNative = tmpResult.useFieldLabelA11yNative(size);
  const accessibilityLabel = fieldLabelA11yNative.accessibilityLabel;
  const labelId = fieldLabelA11yNative.labelId;
  const tmp8 = _objectWithoutProperties(fieldLabelA11yNative, closure_3);
  const tmpResult4 = useTextField;
  const textField = tmpResult4.useTextField(size, undefined);
  ({ innerRef, inputProps } = textField);
  const Input = tmp(6025).Input;
  const merged = Object.assign(size);
  const items = [size.containerStyle, ];
  let prop;
  if (tmp6) {
    prop = tmp4.centeredContainerStyle;
  }
  items[1] = prop;
  const NativeTextInput = tmp(6042).NativeTextInput;
  const tmpResult5 = _objectWithoutProperties2;
  const merged1 = Object.assign(tmpResult5.propsForNativeTextInput(inputProps));
  const merged2 = Object.assign(tmp8);
  const tmpResult6 = getRequiredFieldA11yName;
  let requiredFieldA11yName = tmpResult6.getRequiredFieldA11yName(accessibilityLabel, required);
  if (requiredFieldA11yName == null) {
    requiredFieldA11yName = accessibilityLabel;
  }
  const items1 = [tmp4.input];
  return <Input labelId={labelId} containerStyle={items}><NativeTextInput accessibilityLabel={requiredFieldA11yName} ref={innerRef} style={items1} placeholderTextColor={inputStyles.placeholderText.color} spellCheck={false} autoFocus={tmp5} /></Input>;
};
