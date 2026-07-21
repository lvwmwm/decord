// Module ID: 7614
// Function ID: 61015
// Name: MessagePreview
// Dependencies: []
// Exports: default

// Module 7614 (MessagePreview)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true } };
obj = { color: importDefault(dependencyMap[4]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.borderColor = obj;
obj.title = {};
const tmp3 = arg1(dependencyMap[2]);
obj.chatItemContainer = { borderRadius: importDefault(dependencyMap[4]).radii.sm };
let closure_6 = obj.createStyles(obj);
let importDefaultResult = importDefault(dependencyMap[5]);
importDefaultResult = new importDefaultResult();
importDefaultResult.setOptions({});
const obj1 = { borderRadius: importDefault(dependencyMap[4]).radii.sm };
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsMessagePreview.tsx");

export default function MessagePreview(message) {
  const tmp = callback3();
  let obj = arg1(dependencyMap[6]);
  obj = { style: tmp.container };
  obj = { 1832956803: true, 420134994: true, -1884532042: true, style: tmp.title };
  const intl = arg1(dependencyMap[8]).intl;
  obj.children = intl.string(arg1(dependencyMap[8]).t.iouM3a);
  const items = [callback(arg1(dependencyMap[7]).Text, obj), ];
  const hexWithOpacityResult = obj.hexWithOpacity(tmp.borderColor.color, 0.08);
  const items1 = [tmp.chatItemContainer, { borderColor: hexWithOpacityResult }];
  items[1] = callback(View, { style: items1, children: callback(importDefault(dependencyMap[9]), obj2) });
  obj.children = items;
  return callback2(View, obj);
};
