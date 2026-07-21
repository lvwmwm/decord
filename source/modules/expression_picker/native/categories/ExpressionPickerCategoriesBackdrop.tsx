// Module ID: 9413
// Function ID: 73263
// Dependencies: []

// Module 9413
let StyleSheet;
const importAllResult = importAll(dependencyMap[0]);
({ StyleSheet, View: closure_3 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[3]).jsx;
let obj1 = arg1(dependencyMap[4]);
let obj = {};
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["borderTopWidth"] = StyleSheet.hairlineWidth;
obj["borderTopColor"] = importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST;
obj.backdrop = obj;
obj1 = { backgroundColor: importDefault(dependencyMap[5]).colors.PROFILE_GRADIENT_NOTE_BACKGROUND, height: arg1(dependencyMap[2]).EXPRESSION_FOOTER_HEIGHT, bottom: undefined };
obj.backdropAndroid = obj1;
let closure_5 = obj1.createStyles(obj);
const tmp2 = arg1(dependencyMap[1]);
const memoResult = importAllResult.memo(function EmojiPickerCategoriesBackdrop() {
  const tmp = callback();
  let obj = arg1(dependencyMap[6]);
  if (obj.isAndroid()) {
    obj = {};
    const items = [, ];
    ({ backdrop: arr[0], backdropAndroid: arr[1] } = tmp);
    obj.style = items;
    let tmp2Result = tmp2(tmp3, obj);
  } else {
    obj = { style: tmp.backdrop };
    const obj1 = { style: tmp.backdrop };
    obj.children = tmp2(importDefault(dependencyMap[7]), obj1);
    tmp2Result = tmp2(tmp3, obj);
  }
  return tmp2Result;
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/expression_picker/native/categories/ExpressionPickerCategoriesBackdrop.tsx");

export default memoResult;
