// Module ID: 13932
// Function ID: 105877
// Dependencies: []

// Module 13932
const importAllResult = importAll(dependencyMap[0]);
const StyleSheet = arg1(dependencyMap[1]).StyleSheet;
const jsx = arg1(dependencyMap[2]).jsx;
const memoResult = importAllResult.memo(function QuestDockBlurredContentBackground(blurTheme) {
  let animatedLayout;
  let animatedStyle;
  blurTheme = blurTheme.blurTheme;
  let str = "dark";
  ({ animatedStyle, animatedLayout } = blurTheme);
  if (undefined !== blurTheme) {
    str = blurTheme;
  }
  const importDefault = str;
  const items = [str];
  const items1 = [str];
  const memo = importAllResult.useMemo(() => {
    let str = "rgba(255, 255, 255, 0.1)";
    if ("dark" === str) {
      str = "rgba(38, 39, 50, 0.65)";
    }
    return str;
  }, items);
  const memo1 = importAllResult.useMemo(() => {
    let str = "rgba(255, 255, 255, 0.1)";
    if ("dark" === str) {
      str = "rgba(38, 39, 50, 0.1)";
    }
    return str;
  }, items1);
  const obj = { position: 1.4883720930232558, top: 35, uniform: 4, ERRORED: 35, blurTintRgba: memo1, android_fallbackColor: memo };
  const items2 = [StyleSheet.absoluteFillObject, animatedStyle];
  obj.style = items2;
  obj.layout = animatedLayout;
  return jsx(importDefault(dependencyMap[3]), obj);
});
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBlurredContentBackground.tsx");

export default memoResult;
