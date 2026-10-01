// Module ID: 15942
// Function ID: 15943
// Name: HomeDrawerShared
// Dependencies: [19, 17, 21, 4836, 2]
// Exports: HomeDrawerSharedItem

// Module 15942 (HomeDrawerShared)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c2;
let map;
const View = react_native.View;
({ jsxs: map, jsx: c2 } = Fragment);
let closure_3 = createStyles.createStyles({ container: { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 12 }, titleContainer: { flex: 1, flexDirection: "column", justifyContent: "center", gap: 2 }, rightContainer: { overflow: "hidden" } });
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerShared.tsx");

export const HomeDrawerSharedItem = function HomeDrawerSharedItem(right) {
  let items;
  let items1;
  let subtitle;
  let title;
  right = right.right;
  ({ title, subtitle } = right);
  const tmp = closure_3();
  const obj2 = { style: tmp.titleContainer, children: items };
  items = [title, subtitle];
  const obj = { style: tmp.container, children: items1 };
  items1 = [map(View, obj2), ];
  let tmp4 = null;
  const tmp2 = map;
  if (null != right) {
    const obj3 = { style: tmp.rightContainer, children: right };
    tmp4 = React2(tmp3, obj3);
  }
  items1[1] = tmp4;
  return tmp2(View, obj);
};
