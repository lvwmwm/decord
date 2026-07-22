// Module ID: 14282
// Function ID: 107907
// Dependencies: []

// Module 14282
const jsx = arg1(dependencyMap[1]).jsx;
const importAllResult = importAll(dependencyMap[0]);
const memoResult = importAll(dependencyMap[0]).memo(function ShareLogsButton() {
  const obj = {};
  const intl = arg1(dependencyMap[3]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[3]).t.Aw+09z);
  obj.onPress = function onPress() {
    let obj = callback(closure_1[4]);
    obj = { message: callback(closure_1[5]).stringify() };
    return obj.showShareActionSheet(obj, "Debug Logs");
  };
  obj.children = jsx(arg1(dependencyMap[6]).ShareIcon, {});
  return jsx(arg1(dependencyMap[2]).PressableOpacity, obj);
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/debug/native/ShareLogsButton.tsx");

export default memoResult;
