// Module ID: 15600
// Function ID: 119053
// Dependencies: []

// Module 15600
const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const memoResult = importAllResult.memo(importAllResult.forwardRef((overrideVariant, ref) => {
  let layout;
  let style;
  overrideVariant = overrideVariant.overrideVariant;
  let obj = { position: "spring", top: 0.4, left: 1 };
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
