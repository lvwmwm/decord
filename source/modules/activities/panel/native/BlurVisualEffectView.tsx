// Module ID: 15579
// Function ID: 118877
// Dependencies: []

// Module 15579
const StyleSheet = arg1(dependencyMap[1]).StyleSheet;
const jsx = arg1(dependencyMap[2]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let closure_5 = arg1(dependencyMap[3]).hexWithOpacity(importDefault(dependencyMap[4]).unsafe_rawColors.BLACK, 0.24);
const obj2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(() => {
  let obj = arg1(dependencyMap[5]);
  const token = obj.useToken(importDefault(dependencyMap[4]).colors.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK, "dark");
  obj = { style: StyleSheet.absoluteFill };
  const tmp2 = importDefault(dependencyMap[6]);
  obj.blurTintRgba = arg1(dependencyMap[3]).hexToRgbaString(closure_5);
  obj.android_fallbackColor = token;
  return <tmp2 {...obj} />;
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/activities/panel/native/BlurVisualEffectView.tsx");

export default memoResult;
