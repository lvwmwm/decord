// Module ID: 9588
// Function ID: 74678
// Name: GIFPickerCategoryView
// Dependencies: []
// Exports: default

// Module 9588 (GIFPickerCategoryView)
let StyleSheet;
let closure_3 = importAll(dependencyMap[0]);
({ StyleSheet, View: closure_4, TouchableOpacity: closure_5 } = arg1(dependencyMap[1]));
arg1(dependencyMap[2]).GIFPickerResultTypes;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE, borderRadius: importDefault(dependencyMap[5]).radii.xs, flex: 1 };
obj.container = obj;
const tmp3 = arg1(dependencyMap[3]);
obj.gifImage = { borderRadius: importDefault(dependencyMap[5]).radii.xs, flex: 1 };
const obj2 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2["backgroundColor"] = importDefault(dependencyMap[5]).unsafe_rawColors.BLACK;
obj2["borderRadius"] = importDefault(dependencyMap[5]).radii.xs;
obj2["opacity"] = 0.6;
obj.gifOverlay = obj2;
const obj3 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj3["margin"] = importDefault(dependencyMap[5]).space.PX_8;
obj3["justifyContent"] = "center";
obj3["flexDirection"] = "row";
obj3["alignItems"] = "center";
obj.categoryName = obj3;
const obj1 = { borderRadius: importDefault(dependencyMap[5]).radii.xs, flex: 1 };
obj.categoryNameIcon = { marginRight: importDefault(dependencyMap[5]).space.PX_4 };
let closure_9 = obj.createStyles(obj);
const obj4 = { marginRight: importDefault(dependencyMap[5]).space.PX_4 };
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/gif_picker/native/GIFPickerCategoryView.tsx");

export default function GIFPickerCategoryView(onSelectCategory) {
  onSelectCategory = onSelectCategory.onSelectCategory;
  const arg1 = onSelectCategory;
  const item = onSelectCategory.item;
  const importDefault = item;
  const tmp = callback2();
  const items = [onSelectCategory, item];
  const callback = React.useCallback(() => {
    onSelectCategory(item.type, item.name);
  }, items);
  const intl = arg1(dependencyMap[6]).intl;
  let obj = { categoryName: item.name };
  const formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[6]).t.j+63pw, obj);
  obj = { style: tmp.container, onPress: callback, accessible: true, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult };
  const merged = Object.assign(importDefault(dependencyMap[7])(callback, formatToPlainStringResult));
  obj = { style: tmp.gifImage, source: obj1 };
  const items1 = [callback(importDefault(dependencyMap[8]), obj), callback(closure_4, { style: tmp.gifOverlay }), ];
  const obj3 = { style: tmp.categoryName, accessible: false };
  if (item.type === GIFPickerResultTypes.TRENDING_GIFS) {
    const obj4 = { size: "sm", style: tmp.categoryNameIcon, color: importDefault(dependencyMap[5]).colors.WHITE };
    let tmp9 = callback(arg1(dependencyMap[9]).AnalyticsIcon, obj4);
  } else {
    tmp9 = null;
    if (item.type === GIFPickerResultTypes.FAVORITES) {
      const obj5 = { size: "sm", style: tmp.categoryNameIcon, color: importDefault(dependencyMap[5]).colors.WHITE };
      tmp9 = callback(arg1(dependencyMap[10]).StarIcon, obj5);
    }
  }
  const items2 = [tmp9, ];
  const obj6 = { 1448895712: null, -1135386053: "flex-start", 833392556: 8, 67064142: 16, children: item.name };
  items2[1] = callback(arg1(dependencyMap[11]).Text, obj6);
  obj3.children = items2;
  items1[2] = closure_8(closure_4, obj3);
  obj["children"] = items1;
  return closure_8(closure_5, obj);
};
