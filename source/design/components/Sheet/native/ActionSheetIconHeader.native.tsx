// Module ID: 10338
// Function ID: 79795
// Name: ActionSheetIconHeader
// Dependencies: []
// Exports: ActionSheetIconHeader

// Module 10338 (ActionSheetIconHeader)
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
  obj = { 1655478700: 17, 72438626: "message_display_compact", 1446732292: "message", 1806461523: "absolute", children: title };
  const items1 = [callback(arg1(dependencyMap[4]).Text, obj), ];
  let tmp4 = null;
  if (null != subtitle) {
    const obj1 = { children: subtitle };
    tmp4 = callback(arg1(dependencyMap[4]).Text, obj1);
  }
  items1[1] = tmp4;
  obj.children = items1;
  items[1] = closure_4(View, obj);
  obj.children = items;
  return closure_4(View, obj);
};
