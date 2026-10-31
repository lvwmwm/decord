// Module ID: 12369
// Function ID: 12370
// Name: AppLauncherSelectOptionFormRow
// Dependencies: [19, 21, 5014, 575, 12361, 8177, 5624, 6984, 2]
// Exports: default

// Module 12369 (AppLauncherSelectOptionFormRow)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5624 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let obj2;
const jsx = Fragment.jsx;
let obj = { formRow: obj2 };
obj2 = { flexDirection: "row", backgroundColor: nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg, alignItems: "center", flex: 1 };
let closure_3 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherSelectOptionFormRow.tsx");

export default function AppLauncherSelectOptionFormRow(arg0) {
  let autoFocus;
  let children;
  let fn;
  let option;
  let selected;
  let unselectedSubLabel;
  ({ selected, selectedItemName: require, unselectedSubLabel } = arg0);
  ({ option, autoFocus } = arg0);
  const merged = Object.assign(arg0, Object.assign({ option: 0, selected: 0, selectedItemName: 0, unselectedSubLabel: 0, autoFocus: 0 }));
  const onPress = merged.onPress;
  const tmp2 = closure_3();
  const obj = require("useAnimationDelayedAutoFocus");
  const animationDelayedAutoFocus = obj.useAnimationDelayedAutoFocus(autoFocus, onPress);
  const FormRow = require("module_8177").FormRow;
  let str = "text-md/medium";
  const Text = require("Text/Text").Text;
  if (selected) {
    str = "text-sm/medium";
  }
  let str2 = "text-default";
  if (selected) {
    str2 = "interactive-text-default";
  }
  if (selected) {
    fn = () => jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: require });
  } else {
    fn = null;
    if (null != unselectedSubLabel) {
      fn = () => jsx(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", lineClamp: 1, children: unselectedSubLabel });
    }
  }
  const merged1 = Object.assign(merged);
  return <FormRow start end style={tmp2.formRow} label={null} subLabel={fn} trailing={null} />;
};
