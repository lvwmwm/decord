// Module ID: 12175
// Function ID: 12176
// Name: AppLauncherBooleanOption
// Dependencies: [32, 19, 21, 5005, 587, 558, 576, 5073, 6961, 8988, 2]

// Module 12175 (AppLauncherBooleanOption)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp;
const react_native = tmp(5073);
const FormCheckbox = tmp(6961);
const Form = tmp(8988);
const jsx = Fragment.jsx;
let obj = { container: obj2, checkboxWrapper: { flexShrink: 0 } };
obj2 = { flexDirection: "row", width: "100%", backgroundColor: nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg, alignItems: "center" };
let closure_5 = createStyles.createStyles(obj);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherBooleanOption(onPress) {
  let accessibilityRole;
  let accessibilityState;
  let first;
  let initialValue;
  let option;
  let tmp10;
  let tmp5;
  let tmp8;
  const tmp = require;
  const obj = react2;
  const cResult = obj.c(18);
  ({ option, initialValue } = onPress);
  onPress = onPress.onPress;
  const hasError = onPress.hasError;
  const tmp4 = closure_5();
  if (cResult[0] !== initialValue) {
    const fn = function s() {
      return null != initialValue && "text" === tmp.type && "true" === tmp.text;
    };
    cResult[0] = initialValue;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  [first, react] = react.useState(tmp5);
  if (cResult[2] !== first) {
    const obj2 = { checked: first };
    cResult[2] = first;
    cResult[3] = obj2;
    tmp8 = obj2;
  } else {
    tmp8 = cResult[3];
  }
  const tmpResult = react_native;
  const checkboxA11yNative = tmpResult.useCheckboxA11yNative(tmp8);
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  if (cResult[4] !== first) {
    const tmp12 = jsx(FormCheckbox.FormCheckbox, { checked: first });
    cResult[4] = first;
    cResult[5] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === onPress) {
    let tmp13;
    if (cResult[7] === first) {
      tmp13 = cResult[8];
    }
    if (cResult[9] === accessibilityRole) {
      if (cResult[10] === accessibilityState) {
        if (cResult[11] === hasError) {
          if (cResult[12] === option.displayName) {
            if (cResult[13] === tmp4.checkboxWrapper) {
              if (cResult[14] === tmp4.container) {
                if (cResult[15] === tmp10) {
                  let tmp14;
                  if (cResult[16] === tmp13) {
                    tmp14 = cResult[17];
                  }
                  return tmp14;
                }
              }
            }
          }
        }
      }
    }
    cResult[9] = accessibilityRole;
    cResult[10] = accessibilityState;
    cResult[11] = hasError;
    cResult[12] = option.displayName;
    cResult[13] = tmp4.checkboxWrapper;
    cResult[14] = tmp4.container;
    cResult[15] = tmp10;
    cResult[16] = tmp13;
    const tmp16 = jsx(Form.FormRow, { start: true, end: true, style: tmp4.container, hasError, label: option.displayName, accessibilityRole, accessibilityState, trailing: tmp10, trailingWrapperStyle: tmp4.checkboxWrapper, onPress: tmp13 });
    class W {
      constructor() {
        closure_3(!first);
        onPress(!first);
      }
    }
    tmp14 = tmp16;
  }
  class W {
    constructor() {
      closure_3(!first);
      onPress(!first);
    }
  }
  cResult[6] = onPress;
  cResult[7] = first;
  cResult[8] = W;
  tmp13 = W;
}) : (function AppLauncherBooleanOption(arg0) {
  let accessibilityRole;
  let accessibilityState;
  let closure_129_0;
  let closure_129_1;
  let closure_3;
  let first;
  let hasError;
  let option;
  ({ initialValue: closure_129_0, onPress: closure_129_1 } = arg0);
  first = undefined;
  closure_3 = undefined;
  ({ option, hasError } = arg0);
  const tmp = closure_5();
  [first, closure_3] = react.useState(() => null != closure_1_0 && "text" === tmp.type && "true" === tmp.text);
  const obj = react_native;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: first });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const FormRow = Form.FormRow;
  return <FormRow start end style={tmp.container} hasError={hasError} label={option.displayName} accessibilityRole={accessibilityRole} accessibilityState={accessibilityState} trailing={null} trailingWrapperStyle={tmp.checkboxWrapper} onPress={function onPress() {
    closure_3(!first);
    closure_1_1(!first);
  }} />;
});
const result = size.fileFinishedImporting("modules/app_launcher/native/options/boolean/AppLauncherBooleanOption.tsx");

export default tmp2;
