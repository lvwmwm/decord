// Module ID: 9733
// Function ID: 9734
// Name: RoleLabel
// Dependencies: [19, 17, 4825, 21, 4836, 504, 1177, 8053, 2]
// Exports: RoleLabel

// Module 9733 (RoleLabel)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import Form from "Form" /* 8053 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ container: { display: "flex", flexDirection: "row" }, roleDot: { marginRight: 4 } });
const result = size.fileFinishedImporting("design/void/RoleLabel/native/RoleLabel.tsx");

export const RoleLabel = function RoleLabel(color) {
  let colors;
  let items1;
  let name;
  let roleStyle;
  color = color.color;
  ({ name, colors } = color);
  const tmp = closure_6();
  const items = [AccessibilityStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
  const tmp5 = "username" === stateFromStores && null != color;
  let tmp10 = "dot" === stateFromStores;
  const obj3 = { style: tmp.container, children: items1 };
  const tmp8 = hasOwnProperty;
  const tmp9 = View;
  if (tmp10) {
    tmp10 = null != color;
  }
  if (tmp10) {
    const obj4 = { color, colors, containerStyles: tmp.roleDot };
    tmp10 = React3(tmp2(1177).RoleDot, obj4);
  }
  items1 = [tmp10, React3(Form.FormLabel, { style: {}, text: name })];
  return tmp8(tmp9, obj3);
};
