// Module ID: 12096
// Function ID: 12097
// Name: RoleName
// Dependencies: [19, 17, 4749, 21, 4757, 576, 504, 8223, 1177, 4753, 2]
// Exports: default

// Module 12096 (RoleName)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4753 */;
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 8223 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4749 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4757);
let obj2 = { container: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 }, name: { flexShrink: 1 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/roles/native/RoleName.tsx");

export default function RoleName(dotBackground) {
  ({ role, textVariant } = dotBackground);
  if (textVariant === undefined) {
    textVariant = "text-md/medium";
  }
  let flag = dotBackground.dotBackground;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_6();
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => roleStyle.roleStyle);
  ({ guildId, colorString, colorStrings } = role);
  const processColorStringsArray = enhanced_role_colors_EnhancedRoleColorUtils.useProcessColorStringsArray(colorStrings);
  const obj4 = { style: tmp.container, children: null };
  let tmp9 = "dot" === stateFromStores;
  const isRoleStyleAndRoleColorsEligibleForERC = enhanced_role_colors_EnhancedRoleColorUtils.useIsRoleStyleAndRoleColorsEligibleForERC(guildId, undefined, stateFromStores, processColorStringsArray);
  if (tmp9) {
    tmp9 = null != colorString;
  }
  if (tmp9) {
    const obj5 = { color: colorString, colors: colorStrings, guildId, background: flag };
    tmp9 = React4(tmp2(1177).RoleDot, obj5);
  }
  const items1 = [tmp9, ];
  const obj6 = { variant: textVariant, style: null, lineClamp: 1, gradientColors: null, children: null };
  const items2 = [tmp.name, ];
  let tmp13;
  if ("username" === stateFromStores) {
    if (null != colorString) {
      const obj7 = { color: colorString };
      tmp13 = obj7;
    }
  }
  items2[1] = tmp13;
  obj6.style = items2;
  let tmp15;
  if (isRoleStyleAndRoleColorsEligibleForERC) {
    tmp15 = processColorStringsArray;
  }
  obj6.gradientColors = tmp15;
  obj6.children = dotBackground.children;
  items1[1] = React4(Text_Text.Text, obj6);
  obj4.children = items1;
  return hasOwnProperty(View, obj4);
};
