// Module ID: 13935
// Function ID: 105909
// Dependencies: []

// Module 13935
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
  const android_fallbackColor = importAllResult.useMemo(() => {
    let str = "rgba(255, 255, 255, 0.1)";
    if ("dark" === str) {
      str = "rgba(38, 39, 50, 0.65)";
    }
    return str;
  }, items);
  const blurTintRgba = importAllResult.useMemo(() => {
    let str = "rgba(255, 255, 255, 0.1)";
    if ("dark" === str) {
      str = "rgba(38, 39, 50, 0.1)";
    }
    return str;
  }, items1);
  const style = [StyleSheet.absoluteFillObject, animatedStyle];
  return jsx(importDefault(dependencyMap[3]), { blurTintRgba, android_fallbackColor, style, layout });
});
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBlurredContentBackground.tsx");

export default memoResult;
