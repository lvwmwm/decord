// Module ID: 14106
// Function ID: 108428
// Dependencies: [31, 27, 33, 4532, 2]

// Module 14106
import importAllResult from "result";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const memoResult = importAllResult.memo(function QuestDockBlurredContentBackground(blurTheme) {
  let animatedLayout;
  let animatedStyle;
  blurTheme = blurTheme.blurTheme;
  let str = "dark";
  ({ animatedStyle, animatedLayout } = blurTheme);
  if (undefined !== blurTheme) {
    str = blurTheme;
  }
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
  const obj = { nativeID: "quest-dock-blurred-background", blurTintRgba: memo1, blurAmount: 0.5, blurTheme: "dark", android_fallbackColor: memo };
  const items2 = [StyleSheet.absoluteFillObject, animatedStyle];
  obj.style = items2;
  obj.layout = animatedLayout;
  return jsx(str(4532), { nativeID: "quest-dock-blurred-background", blurTintRgba: memo1, blurAmount: 0.5, blurTheme: "dark", android_fallbackColor: memo });
});
const result = require("jsxProd").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBlurredContentBackground.tsx");

export default memoResult;
