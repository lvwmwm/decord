// Module ID: 15679
// Function ID: 15680
// Name: FormDropdown
// Dependencies: [19, 21, 5009, 15680, 8659, 11377, 9090, 5619, 2]
// Exports: default

// Module 15679 (FormDropdown)
import FormStylesDefault from "FormStyles" /* 15680 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let tmp2;
const TouchableHitBoxDefault = tmp2(9090);
({ jsx: c3, jsxs: closure_4 } = Fragment);
const styles = createStyles.createStyles({ container: { alignItems: "center", flexDirection: "row" }, content: { marginStart: 8, flexGrow: 1 } });
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormDropdown.tsx");

export default function FormDropdown(arg0) {
  let ChevronSmallDownIcon;
  let disabled;
  let items;
  let items1;
  let label;
  let leading;
  let onPress;
  let placeholder;
  let str;
  let tmp11;
  let tmp7;
  ({ disabled, label } = arg0);
  ({ leading, onPress, placeholder } = arg0);
  const tmp = styles();
  const tmp4 = FormStylesDefault();
  if (disabled) {
    ChevronSmallDownIcon = tmp6(8659).LockIcon;
    tmp7 = tmp6;
  } else {
    ChevronSmallDownIcon = tmp6(11377).ChevronSmallDownIcon;
    tmp7 = tmp6;
  }
  const obj = { style: items, accessibilityRole: "spinbutton", disabled, onPress: tmp11, children: items1 };
  items = [tmp.container, tmp4.dropdownInput];
  tmp11 = undefined;
  const tmp5Result = _false(ChevronSmallDownIcon, { size: "md" });
  const tmp2Result = TouchableHitBoxDefault;
  const tmp9 = React3;
  if (!disabled) {
    tmp11 = onPress;
  }
  items1 = [leading, , ];
  const obj2 = { style: tmp.content, variant: "text-md/medium", color: str, children: label };
  str = "text-muted";
  const Text = tmp7(5619).Text;
  if (null != label) {
    str = "text-default";
  }
  if (label == null) {
    label = placeholder;
  }
  items1[1] = _false(Text, obj2);
  items1[2] = tmp5Result;
  return tmp9(tmp2Result, obj);
};
export const useFormDropdownStyles = styles;
