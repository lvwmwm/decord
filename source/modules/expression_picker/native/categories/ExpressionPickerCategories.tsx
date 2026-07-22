// Module ID: 9413
// Function ID: 73285
// Name: ExpressionPickerCategories
// Dependencies: []
// Exports: default

// Module 9413 (ExpressionPickerCategories)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH, paddingHorizontal: importDefault(dependencyMap[4]).space.PX_8, flexDirection: "row", alignItems: "center" };
obj.container = obj;
const tmp3 = arg1(dependencyMap[2]);
obj.containerRefresh = { borderTopWidth: 1, borderTopColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE };
let closure_6 = obj.createStyles(obj);
const obj1 = { borderTopWidth: 1, borderTopColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE };
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/expression_picker/native/categories/ExpressionPickerCategories.tsx");

export default function ExpressionPickerCategories(arg0) {
  let children;
  let portalHostName;
  let style;
  ({ children, portalHostName, style } = arg0);
  const tmp = callback2();
  const tmp2 = importDefault(dependencyMap[5])("ExpressionPickerCategories");
  let obj = { hostName: portalHostName };
  obj = {};
  const items = [tmp.container, , ];
  let containerRefresh = null;
  if (tmp2) {
    containerRefresh = tmp.containerRefresh;
  }
  items[1] = containerRefresh;
  items[2] = style;
  obj.style = items;
  let tmp7 = null;
  if (!tmp2) {
    tmp7 = callback(importDefault(dependencyMap[7]), {});
  }
  const items1 = [tmp7, children];
  obj.children = items1;
  obj.children = closure_5(View, obj);
  return callback(arg1(dependencyMap[6]).Portal, obj);
};
