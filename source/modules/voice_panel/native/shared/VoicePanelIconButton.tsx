// Module ID: 15589
// Function ID: 118971
// Dependencies: []

// Module 15589
const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const memoResult = importAllResult.memo(importAllResult.forwardRef((overrideVariant, ref) => {
  let layout;
  let style;
  overrideVariant = overrideVariant.overrideVariant;
  let obj = { -659501978: "spring", 1364634211: "linear", 72417884: "easeInEaseOut" };
  ({ style, layout } = overrideVariant);
  Object.setPrototypeOf(null);
  const merged = Object.assign(overrideVariant, obj);
  obj = { ref, style, layout };
  obj = {};
  const merged1 = Object.assign(merged);
  obj["size"] = "sm";
  let str = "secondary-overlay";
  if (null != overrideVariant) {
    str = overrideVariant;
  }
  obj["variant"] = str;
  obj["maxFontSizeMultiplier"] = 2;
  obj.children = jsx(ref(dependencyMap[3]).IconButton, obj);
  return jsx(importDefault(dependencyMap[2]), obj);
}));
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelIconButton.tsx");

export default memoResult;
