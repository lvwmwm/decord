// Module ID: 15233
// Function ID: 115023
// Name: FormRowPlaceholderItem
// Dependencies: []
// Exports: default

// Module 15233 (FormRowPlaceholderItem)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { itemContainer: obj };
obj = { "Bool(false)": "WaveformIcon", "Bool(false)": "png", "Bool(false)": true, "Bool(false)": "/assets/design/components/Icon/native/redesign/generated/images", "Bool(false)": 24, "Bool(false)": 24, paddingVertical: arg1(dependencyMap[2]).SEARCH_ROW_TAP_STATE_PADDING };
const obj1 = { right: null, accessible: "b7eca7761481c5ff3cc170b16fbdff57", useEffect: "img_no_results", y: "png", borderRadius: importDefault(dependencyMap[5]).radii.xl, backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
obj.avatar = obj1;
obj.innerContainer = {};
const obj2 = { 0: true, 0: true, 0: true, 9223372036854775807: true, borderRadius: importDefault(dependencyMap[5]).radii.md, backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
obj.upperText = obj2;
const tmp3 = arg1(dependencyMap[3]);
obj.lowerText = { borderRadius: importDefault(dependencyMap[5]).radii.md, backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
let closure_6 = obj.createStyles(obj);
const obj3 = { borderRadius: importDefault(dependencyMap[5]).radii.md, backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/FormRowPlaceholder.tsx");

export default function FormRowPlaceholderItem(style) {
  const tmp = callback3();
  let obj = arg1(dependencyMap[6]);
  const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(true);
  obj = { style: items, pointerEvents: "none" };
  const items = [placeholderAnimatedStyle, tmp.itemContainer, style.style];
  obj = { style: tmp.avatar };
  const items1 = [callback(View, obj), ];
  const obj1 = { style: tmp.innerContainer };
  const items2 = [callback(View, { style: tmp.upperText }), callback(View, { style: tmp.lowerText })];
  obj1.children = items2;
  items1[1] = callback2(View, obj1);
  obj.children = items1;
  return callback2(importDefault(dependencyMap[7]).View, obj);
};
