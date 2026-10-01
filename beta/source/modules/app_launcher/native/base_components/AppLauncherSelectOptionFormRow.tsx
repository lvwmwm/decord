// Module ID: 11658
// Function ID: 11659
// Name: AppLauncherSelectOptionFormRow
// Dependencies: [19, 21, 4836, 576, 11651, 8053, 4832, 1177, 6563, 2]
// Exports: default

// Module 11658 (AppLauncherSelectOptionFormRow)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import Form from "Form" /* 8053 */;
import useAnimationDelayedAutoFocus from "useAnimationDelayedAutoFocus" /* 11651 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
const jsx = Fragment.jsx;
let obj = { formRow: obj2 };
obj2 = { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, alignItems: "center", flex: 1 };
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherSelectOptionFormRow.tsx");

export default function AppLauncherSelectOptionFormRow(arg0) {
  let autoFocus;
  let children;
  let fn;
  let option;
  let selected;
  let style;
  let unselectedSubLabel;
  ({ selected, selectedItemName: require, unselectedSubLabel } = arg0);
  ({ style, option, autoFocus } = arg0);
  const merged = Object.assign(arg0, Object.assign({ style: 0, option: 0, selected: 0, selectedItemName: 0, unselectedSubLabel: 0, autoFocus: 0 }));
  const onPress = merged.onPress;
  const tmp2 = closure_4();
  const obj = useAnimationDelayedAutoFocus;
  const animationDelayedAutoFocus = obj.useAnimationDelayedAutoFocus(autoFocus, onPress);
  const items = [tmp2.formRow, style];
  const FormRow = Form.FormRow;
  let str = "text-md/medium";
  const Text = Text_Text.Text;
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
  ({ source: unselectedSubLabel(6563), size: native.IconSizes.SMALL_20 });
  const Icon = tmp3(1177).Icon;
  const merged1 = Object.assign(merged);
  return <FormRow start end style={items} label={null} subLabel={fn} trailing={null} />;
};
