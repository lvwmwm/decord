// Module ID: 10213
// Function ID: 10214
// Name: RoleLabel
// Dependencies: [19, 17, 5010, 21, 5009, 504, 1188, 8169, 2]
// Exports: RoleLabel

// Module 10213 (RoleLabel)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import _mod8169 from "module_8169" /* 8169 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ container: { display: "flex", flexDirection: "row" }, roleDot: { marginRight: 4 } });
const result = size.fileFinishedImporting("design/void/RoleLabel/native/RoleLabel.tsx");

export function RoleLabel(color) {
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
    tmp10 = React3(tmp2(1188).RoleDot, obj4);
  }
  items1 = [tmp10, React3(_mod8169.FormLabel, { style: {}, text: name })];
  return tmp8(tmp9, obj3);
}
