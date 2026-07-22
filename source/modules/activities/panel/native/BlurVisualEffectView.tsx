// Module ID: 15590
// Function ID: 118959
// Dependencies: []

// Module 15590
const StyleSheet = arg1(dependencyMap[1]).StyleSheet;
const jsx = arg1(dependencyMap[2]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let closure_5 = arg1(dependencyMap[3]).hexWithOpacity(importDefault(dependencyMap[4]).unsafe_rawColors.BLACK, 0.24);
const obj2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(() => {
  let obj = arg1(dependencyMap[5]);
  const token = obj.useToken(importDefault(dependencyMap[4]).colors.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK, "dark");
  obj = { "Null": "c67b491c21edfc140b968b3afa5e6528", "Null": "ic_video_disabled", defaultSpeakerForGuildCall: "png", defaultSpeakerForDMCall: 16, borderRadius: 16, padding: 8, style: StyleSheet.absoluteFill };
  const tmp2 = importDefault(dependencyMap[6]);
  obj.blurTintRgba = arg1(dependencyMap[3]).hexToRgbaString(closure_5);
  obj.android_fallbackColor = token;
  return <tmp2 {...obj} />;
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/activities/panel/native/BlurVisualEffectView.tsx");

export default memoResult;
