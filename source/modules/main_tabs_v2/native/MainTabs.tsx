// Module ID: 14672
// Function ID: 110617
// Dependencies: []

// Module 14672
const View = arg1(dependencyMap[1]).View;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).createStyles({ container: { flex: 1 } });
const obj2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(function MainTabs() {
  let obj = arg1(dependencyMap[5]);
  const isCustomThemeActive = obj.useIsCustomThemeActive();
  const tmp = importDefault(dependencyMap[4])();
  const rect = importDefault(dependencyMap[6])();
  obj = { style: items };
  const items = [callback3().container, { marginLeft: rect.left, marginRight: rect.right }];
  obj = { gradient: tmp };
  const items1 = [callback(importDefault(dependencyMap[8]), { absolute: true, mix: isCustomThemeActive }), callback(importDefault(dependencyMap[9]), {})];
  obj.children = items1;
  obj.children = callback2(arg1(dependencyMap[7]).ThemeContextProvider, obj);
  return callback(View, obj);
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/main_tabs_v2/native/MainTabs.tsx");

export default memoResult;
