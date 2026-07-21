// Module ID: 15243
// Function ID: 115081
// Name: FormRowPlaceholderItem
// Dependencies: []
// Exports: default

// Module 15243 (FormRowPlaceholderItem)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { itemContainer: obj };
obj = { height: "isArray", width: "useStateFromStores", accessibilityRole: "textAlign", -1584035243: "r", 998828176: "isArray", 1402519447: "constructor", paddingVertical: arg1(dependencyMap[2]).SEARCH_ROW_TAP_STATE_PADDING };
const obj1 = { flexDirection: null, alignItems: "b7eca7761481c5ff3cc170b16fbdff57", justifyContent: "img_no_results", top: "png", borderRadius: importDefault(dependencyMap[5]).radii.xl, backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
obj.avatar = obj1;
obj.innerContainer = { "Bool(true)": null, "Bool(false)": null };
const obj2 = { bannerAdjustment: null, replayOnNavigationFocus: "fbbee3b1c0716eaa554a8f9a94badc67", minHeight: "asset_nitro_ticket", position: "png", borderRadius: importDefault(dependencyMap[5]).radii.md, backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
obj.upperText = obj2;
const obj3 = { minWidth: true, textAlign: true, fontSize: true, marginBottom: true, borderRadius: importDefault(dependencyMap[5]).radii.md, backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
obj.lowerText = obj3;
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
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
