// Module ID: 15577
// Function ID: 118884
// Dependencies: []

// Module 15577
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const ActivityPanelModes = arg1(dependencyMap[2]).ActivityPanelModes;
const jsx = arg1(dependencyMap[3]).jsx;
let closure_7 = arg1(dependencyMap[4]).createStyles({ buttonParent: { flexShrink: 1 } });
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(function MinimizeActivityButton(arg0) {
  let activityName;
  let setMode;
  ({ activityName, setMode } = arg0);
  const arg1 = setMode;
  const items = [setMode];
  const callback = importAllResult.useCallback(() => {
    setMode(constants.PIP);
  }, items);
  if (undefined !== activityName) {
    if ("" !== activityName) {
      let obj = { style: tmp2.buttonParent };
      obj = { icon: importDefault(dependencyMap[6]) };
      const intl2 = arg1(dependencyMap[7]).intl;
      obj.accessibilityLabel = intl2.string(arg1(dependencyMap[7]).t.brPQ5U);
      obj.onPress = callback;
      obj.text = activityName;
      obj.size = "sm";
      obj.variant = "secondary-overlay";
      obj.maxFontSizeMultiplier = 1;
      obj.shrink = true;
      obj.children = jsx(arg1(dependencyMap[5]).Button, obj);
      let tmp3 = <View {...obj} />;
    }
    return tmp3;
  }
  obj = { "Null": "png", "Null": 16, "Null": 16, "Null": 8, "Null": 4, 9223372036854775807: 10, icon: importDefault(dependencyMap[6]) };
  const intl = arg1(dependencyMap[7]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[7]).t.brPQ5U);
  obj.onPress = callback;
  tmp3 = jsx(arg1(dependencyMap[8]).IconButton, obj);
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/activities/panel/native/MinimizeActivityButton.tsx");

export default memoResult;
