// Module ID: 10339
// Function ID: 79819
// Name: ActionSheetIconHeader
// Dependencies: []
// Exports: ActionSheetIconHeader

// Module 10339 (ActionSheetIconHeader)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_5 = arg1(dependencyMap[3]).createStyles({ container: {}, titles: {} });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("design/components/Sheet/native/ActionSheetIconHeader.native.tsx");

export const ActionSheetIconHeader = function ActionSheetIconHeader(subtitle) {
  let icon;
  let title;
  subtitle = subtitle.subtitle;
  ({ title, icon } = subtitle);
  const tmp = callback2();
  let obj = { style: tmp.container };
  const items = [callback(View, { children: icon }), ];
  obj = { style: tmp.titles };
  const items1 = [callback(arg1(dependencyMap[4]).Text, { children: title }), ];
  let tmp4 = null;
  if (null != subtitle) {
    obj = { cachedAt: true, edpbxy: true, children: subtitle };
    tmp4 = callback(arg1(dependencyMap[4]).Text, obj);
  }
  items1[1] = tmp4;
  obj.children = items1;
  items[1] = closure_4(View, obj);
  obj.children = items;
  return closure_4(View, obj);
};
