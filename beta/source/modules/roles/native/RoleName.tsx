// Module ID: 11316
// Function ID: 11317
// Name: RoleName
// Dependencies: [19, 17, 4825, 21, 4836, 576, 504, 7403, 1177, 4832, 2]
// Exports: default

// Module 11316 (RoleName)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 7403 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2, name: { flexShrink: 1 } };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/roles/native/RoleName.tsx");

export default function RoleName(children) {
  let colorString;
  let colorStrings;
  let guildId;
  let items1;
  let items2;
  let role;
  let roleStyle;
  let textVariant;
  let tmp15;
  ({ role, textVariant } = children);
  children = children.children;
  if (textVariant === undefined) {
    textVariant = "text-md/medium";
  }
  let flag = children.dotBackground;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_6();
  const items = [AccessibilityStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
  ({ guildId, colorString, colorStrings } = role);
  const obj2 = enhanced_role_colors_EnhancedRoleColorUtils;
  const processColorStringsArray = obj2.useProcessColorStringsArray(colorStrings);
  let tmp9 = "dot" === stateFromStores;
  const obj4 = { style: tmp.container, children: items1 };
  const obj3 = enhanced_role_colors_EnhancedRoleColorUtils;
  const isRoleStyleAndRoleColorsEligibleForERC = obj3.useIsRoleStyleAndRoleColorsEligibleForERC(guildId, undefined, stateFromStores, processColorStringsArray);
  const tmp7 = hasOwnProperty;
  const tmp8 = View;
  if (tmp9) {
    tmp9 = null != colorString;
  }
  if (tmp9) {
    const obj5 = { color: colorString, colors: colorStrings, guildId, background: flag };
    tmp9 = React3(tmp2(1177).RoleDot, obj5);
  }
  items1 = [tmp9, ];
  const obj6 = { variant: textVariant, style: items2, lineClamp: 1, gradientColors: tmp15, children };
  items2 = [tmp.name, ];
  let tmp13;
  const Text = tmp2(4832).Text;
  const tmp12 = React3;
  if ("username" === stateFromStores) {
    if (null != colorString) {
      tmp13 = { color: colorString };
      const obj7 = { color: colorString };
    }
  }
  items2[1] = tmp13;
  tmp15 = undefined;
  if (isRoleStyleAndRoleColorsEligibleForERC) {
    tmp15 = processColorStringsArray;
  }
  items1[1] = tmp12(Text, obj6);
  return tmp7(tmp8, obj4);
};
