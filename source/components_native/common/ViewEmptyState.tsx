// Module ID: 9236
// Function ID: 72251
// Name: ViewEmptyState
// Dependencies: []
// Exports: default

// Module 9236 (ViewEmptyState)
importAll(dependencyMap[0]);
({ View: closure_2, Image: closure_3 } = arg1(dependencyMap[1]));
const Fonts = arg1(dependencyMap[2]).Fonts;
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { emptyContainer: { GestureHandlerRootView: null, textAndImages: null, selectedIcon: null, GameDepthTier9LargeBadge: null }, emptyImage: {}, fixOpticalIllusion: { "Bool(false)": "<string:1301872642>", "Bool(false)": "<string:3613261825>" } };
obj = {};
const tmp4 = arg1(dependencyMap[3]);
const merged = Object.assign(importDefault(dependencyMap[5])(Fonts.DISPLAY_SEMIBOLD, importDefault(dependencyMap[6]).colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
obj["textAlign"] = "center";
obj["marginTop"] = 32;
obj["opacity"] = 0.8;
obj.emptyLabel = obj;
obj.emptyText = { fontFamily: Fonts.PRIMARY_MEDIUM };
let closure_6 = obj.createStyles(obj);
const importDefaultResult = importDefault(dependencyMap[5]);
const obj1 = { fontFamily: Fonts.PRIMARY_MEDIUM };
const result = arg1(dependencyMap[8]).fileFinishedImporting("components_native/common/ViewEmptyState.tsx");

export default function ViewEmptyState(arg0) {
  let label;
  let source;
  let style;
  let text;
  ({ label, text } = arg0);
  ({ source, style } = arg0);
  const tmp = callback2();
  let obj = { style: items };
  const items = [tmp.emptyContainer, style];
  obj = { style: tmp.fixOpticalIllusion };
  obj = { resizeMode: "contain", source, style: tmp.emptyImage };
  const items1 = [callback(closure_3, obj), , ];
  let tmp5 = null;
  if (null != label) {
    const obj1 = { style: tmp.emptyLabel, children: label.toUpperCase() };
    tmp5 = callback(arg1(dependencyMap[7]).LegacyText, obj1);
  }
  items1[1] = tmp5;
  let tmp9 = null;
  if (null != text) {
    const obj2 = {};
    const items2 = [, ];
    ({ emptyLabel: arr3[0], emptyText: arr3[1] } = tmp);
    obj2.style = items2;
    obj2.children = text;
    tmp9 = callback(arg1(dependencyMap[7]).LegacyText, obj2);
  }
  items1[2] = tmp9;
  obj.children = items1;
  obj.children = closure_5(closure_2, obj);
  return callback(closure_2, obj);
};
