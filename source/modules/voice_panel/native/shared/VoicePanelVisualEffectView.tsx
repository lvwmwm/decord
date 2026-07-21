// Module ID: 15724
// Function ID: 120178
// Name: VoicePanelVisualEffectView
// Dependencies: []

// Module 15724 (VoicePanelVisualEffectView)
const tmp2 = arg1(dependencyMap[1]);
const View = tmp2.View;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj1 = arg1(dependencyMap[3]);
let obj = {};
obj = {};
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj.wrapper = obj;
obj1 = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, borderColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE, borderRadius: importDefault(dependencyMap[4]).modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS };
obj.border = obj1;
let closure_6 = obj1.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const memoResult = importAllResult.memo(function VoicePanelVisualEffectViewInner(matchAppTheme) {
  let flag = matchAppTheme.matchAppTheme;
  if (flag === undefined) {
    flag = false;
  }
  let obj = arg1(dependencyMap[5]);
  const token = obj.useToken(importDefault(dependencyMap[4]).colors.THEME_LOCKED_BLUR_FALLBACK);
  const tmp2 = callback3();
  obj = { blurTheme: "dark" };
  let tmp5;
  if (!flag) {
    tmp5 = token;
  }
  obj.android_fallbackColor = tmp5;
  const tmp4Result = callback(arg1(dependencyMap[7]).BackgroundBlurFill, obj);
  let tmp7 = tmp4Result;
  if (tmp3) {
    obj = { style: tmp2.wrapper };
    const items = [tmp4Result, ];
    const obj1 = { style: tmp2.border };
    items[1] = callback(View, obj1);
    obj.children = items;
    tmp7 = callback2(View, obj);
  }
  return tmp7;
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelVisualEffectView.tsx");

export const VoicePanelVisualEffectView = memoResult;
