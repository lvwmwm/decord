// Module ID: 15139
// Function ID: 15140
// Name: FormDropdown
// Dependencies: [19, 21, 4971, 558, 576, 15140, 8566, 11076, 5234, 9041, 2]

// Module 15139 (FormDropdown)
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 5234 */;
import FormStylesDefault from "FormStyles" /* 15140 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let tmp5;
const TouchableHitBoxDefault = tmp5(9041);
({ jsx: c3, jsxs: closure_4 } = Fragment);
const styles = createStyles.createStyles({ container: { alignItems: "center", flexDirection: "row" }, content: { marginStart: 8, flexGrow: 1 } });
tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function FormDropdown(arg0) {
  let disabled;
  let items;
  let label;
  let leading;
  let onPress;
  let placeholder;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(16);
  ({ disabled, label, leading } = arg0);
  ({ onPress, placeholder } = arg0);
  const tmp4 = styles();
  const tmp6 = FormStylesDefault();
  if (cResult[0] !== disabled) {
    let ChevronSmallDownIcon;
    const tmp8 = _false;
    if (disabled) {
      ChevronSmallDownIcon = tmp(8566).LockIcon;
    } else {
      ChevronSmallDownIcon = tmp(11076).ChevronSmallDownIcon;
    }
    const tmp8Result = tmp8(ChevronSmallDownIcon, { size: "md" });
    cResult[0] = disabled;
    cResult[1] = tmp8Result;
    tmp7 = tmp8Result;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === tmp6.dropdownInput) {
    let tmp10;
    if (cResult[3] === tmp4.container) {
      tmp10 = cResult[4];
    }
    let str = "text-muted";
    if (null != label) {
      str = "text-default";
    }
    if (label == null) {
      label = placeholder;
    }
    if (cResult[5] === tmp4.content) {
      if (cResult[6] === str) {
        let tmp13;
        if (cResult[7] === label) {
          tmp13 = cResult[8];
        }
        if (cResult[9] === disabled) {
          if (cResult[10] === tmp7) {
            if (cResult[11] === leading) {
              if (cResult[12] === tmp10) {
                if (cResult[13] === tmp11) {
                  let tmp16;
                  if (cResult[14] === tmp13) {
                    tmp16 = cResult[15];
                  }
                  return tmp16;
                }
              }
            }
          }
        }
        const obj2 = { style: tmp10, accessibilityRole: "spinbutton", disabled, onPress: tmp11, children: items };
        items = [leading, tmp13, tmp7];
        const tmp18 = React3(TouchableHitBoxDefault, obj2);
        cResult[9] = disabled;
        cResult[10] = tmp7;
        cResult[11] = leading;
        cResult[12] = tmp10;
        cResult[13] = tmp11;
        cResult[14] = tmp13;
        cResult[15] = tmp18;
        tmp16 = tmp18;
      }
    }
    const obj3 = { style: tmp4.content, variant: "text-md/medium", color: str, children: label };
    const tmp15 = _false(Text_Text.Text, obj3);
    cResult[5] = tmp4.content;
    cResult[6] = str;
    cResult[7] = label;
    cResult[8] = tmp15;
    tmp13 = tmp15;
  }
  const items1 = [tmp4.container, tmp6.dropdownInput];
  cResult[2] = tmp6.dropdownInput;
  cResult[3] = tmp4.container;
  cResult[4] = items1;
  tmp10 = items1;
}) : (function FormDropdown(arg0) {
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
    ChevronSmallDownIcon = tmp6(8566).LockIcon;
    tmp7 = tmp6;
  } else {
    ChevronSmallDownIcon = tmp6(11076).ChevronSmallDownIcon;
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
  const Text = tmp7(5234).Text;
  if (null != label) {
    str = "text-default";
  }
  if (label == null) {
    label = placeholder;
  }
  items1[1] = _false(Text, obj2);
  items1[2] = tmp5Result;
  return tmp9(tmp2Result, obj);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormDropdown.tsx");

export default tmp5;
export const useFormDropdownStyles = styles;
