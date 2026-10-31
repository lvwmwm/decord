// Module ID: 12372
// Function ID: 12373
// Name: AppLauncherBooleanOption
// Dependencies: [32, 19, 21, 5014, 575, 5082, 8177, 6989, 2]
// Exports: default

// Module 12372 (AppLauncherBooleanOption)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import react_native from "react-native" /* 5082 */;
import _mod8177 from "module_8177" /* 8177 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let obj2;
const jsx = Fragment.jsx;
let obj = { container: obj2, checkboxWrapper: { flexShrink: 0 } };
obj2 = { flexDirection: "row", width: "100%", backgroundColor: nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg, alignItems: "center" };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/app_launcher/native/options/boolean/AppLauncherBooleanOption.tsx");

export default function AppLauncherBooleanOption(arg0) {
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
  const FormRow = _mod8177.FormRow;
  return <FormRow start end style={tmp.container} hasError={hasError} label={option.displayName} accessibilityRole={accessibilityRole} accessibilityState={accessibilityState} trailing={null} trailingWrapperStyle={tmp.checkboxWrapper} onPress={function onPress() {
    closure_3(!first);
    closure_1_1(!first);
  }} />;
};
