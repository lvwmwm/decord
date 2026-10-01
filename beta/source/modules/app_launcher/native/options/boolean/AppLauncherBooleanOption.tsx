// Module ID: 11659
// Function ID: 11660
// Name: AppLauncherBooleanOption
// Dependencies: [32, 19, 21, 4836, 576, 8053, 2]
// Exports: default

// Module 11659 (AppLauncherBooleanOption)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Form from "Form" /* 8053 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const obj = { container: { flexDirection: "row", width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, alignItems: "center" } };
({ flexDirection: "row", width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, alignItems: "center" });
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/app_launcher/native/options/boolean/AppLauncherBooleanOption.tsx");

export default function AppLauncherBooleanOption(arg0) {
  let closure_129_0;
  let closure_129_1;
  let closure_3;
  let first;
  let hasError;
  let option;
  let style;
  ({ initialValue: closure_129_0, onPress: closure_129_1 } = arg0);
  first = undefined;
  closure_3 = undefined;
  ({ style, option, hasError } = arg0);
  const tmp = closure_5();
  [first, closure_3] = react.useState(() => null != closure_1_0 && "text" === tmp.type && "true" === tmp.text);
  const items = [tmp.container, style];
  return jsx(Form.FormCheckboxRow, {
    start: true,
    end: true,
    style: items,
    hasError,
    label: option.displayName,
    selected: first,
    onPress() {
      closure_3(!first);
      closure_1_1(!first);
    }
  });
};
