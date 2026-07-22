// Module ID: 15001
// Function ID: 112975
// Dependencies: []

// Module 15001
const YOU_BAR_BUTTON_ICON_SIZE = arg1(dependencyMap[1]).YOU_BAR_BUTTON_ICON_SIZE;
const jsx = arg1(dependencyMap[2]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let obj = { icon: { width: YOU_BAR_BUTTON_ICON_SIZE, height: YOU_BAR_BUTTON_ICON_SIZE } };
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BRAND };
obj.badge = obj;
let closure_4 = arg1(dependencyMap[3]).createStyles(obj);
const obj2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(function YouBarICYMIButton(hasNameplate) {
  hasNameplate = hasNameplate.hasNameplate;
  const tmp = callback();
  let obj = { hasNameplate };
  obj = { size: "custom", style: tmp.icon };
  let str;
  if (hasNameplate) {
    str = "white";
  }
  obj.color = str;
  obj.icon = jsx(arg1(dependencyMap[7]).FlashIcon, obj);
  obj.hasBadge = importDefault(dependencyMap[5])().showDot;
  obj.badgeStyle = tmp.badge;
  obj.onPress = function onPress() {
    let obj = callback(closure_2[8]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      obj = { screen: "icymi-screen" };
      obj = { inNestedNavigator: true };
      obj.params = obj;
      rootNavigationRef.navigate("icymi", obj);
    }
  };
  const intl = arg1(dependencyMap[9]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[9]).t.jnXV/V);
  return jsx(importDefault(dependencyMap[6]), obj);
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarICYMIButton.tsx");

export default memoResult;
