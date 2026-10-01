// Module ID: 14690
// Function ID: 14691
// Name: QuestDockBlurredContentBackground
// Dependencies: [19, 17, 21, 5268, 2]

// Module 14690 (QuestDockBlurredContentBackground)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import VisualEffectViewAnimatedDefault from "VisualEffectViewAnimated" /* 5268 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
const memoResult = react.memo(function QuestDockBlurredContentBackground(blurTheme) {
  let layoutAnimatedStyle;
  let layoutAnimation;
  let opacityAnimatedStyle;
  blurTheme = blurTheme.blurTheme;
  let str = "dark";
  ({ layoutAnimatedStyle, opacityAnimatedStyle, layoutAnimation } = blurTheme);
  if (undefined !== blurTheme) {
    str = blurTheme;
  }
  const items = [str];
  const items1 = [str];
  const memo = react.useMemo(() => {
    str = "rgba(255, 255, 255, 0.1)";
    if ("dark" === str) {
      str = "rgba(38, 39, 50, 0.65)";
    }
    return str;
  }, items);
  const memo1 = react.useMemo(() => {
    str = "rgba(255, 255, 255, 0.1)";
    if ("dark" === str) {
      str = "rgba(38, 39, 50, 0.1)";
    }
    return str;
  }, items1);
  const items2 = [StyleSheet.absoluteFillObject, layoutAnimatedStyle, opacityAnimatedStyle];
  return jsx(VisualEffectViewAnimatedDefault, { nativeID: "quest-dock-blurred-background", tintColor: memo1, blurAmount: 0.5, blurTheme: "dark", android_fallbackColor: memo, style: items2, layout: layoutAnimation });
});
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBlurredContentBackground.tsx");

export default memoResult;
