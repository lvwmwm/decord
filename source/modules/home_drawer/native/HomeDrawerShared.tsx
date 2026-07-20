// Module ID: 14702
// Function ID: 110937
// Name: HomeDrawerSharedItem
// Dependencies: []
// Exports: HomeDrawerSharedItem

// Module 14702 (HomeDrawerSharedItem)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsxs: closure_1, jsx: closure_2 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_3 = arg1(dependencyMap[3]).createStyles({ container: {}, titleContainer: { "Bool(false)": true, "Bool(false)": 0, "Bool(false)": 0.5, "Bool(false)": 3 }, rightContainer: { overflow: "hidden" } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/home_drawer/native/HomeDrawerShared.tsx");

export const HomeDrawerSharedItem = function HomeDrawerSharedItem(right) {
  let subtitle;
  let title;
  right = right.right;
  ({ title, subtitle } = right);
  const tmp = callback3();
  let obj = { style: tmp.container };
  obj = { style: tmp.titleContainer, children: items };
  const items = [title, subtitle];
  const items1 = [callback(View, obj), ];
  let tmp4 = null;
  if (null != right) {
    obj = { style: tmp.rightContainer, children: right };
    tmp4 = callback2(View, obj);
  }
  items1[1] = tmp4;
  obj.children = items1;
  return callback(View, obj);
};
