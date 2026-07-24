// Module ID: 15905
// Function ID: 122881
// Name: VoicePanelVisualEffectView
// Dependencies: [31, 27, 33, 4130, 689, 3834, 1324, 8416, 2]

// Module 15905 (VoicePanelVisualEffectView)
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_4;
let closure_5;
const require = arg1;
const View = get_ActivityIndicator.View;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let obj = {};
obj = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
obj.wrapper = obj;
_createForOfIteratorHelperLoose = { position: "absolute", top: 1, left: 1, right: 1, bottom: 1, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderRadius: require("_createForOfIteratorHelperLoose").modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS };
obj.border = _createForOfIteratorHelperLoose;
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo(function VoicePanelVisualEffectViewInner(matchAppTheme) {
  let flag = matchAppTheme.matchAppTheme;
  if (flag === undefined) {
    flag = false;
  }
  let obj = require(3834) /* map */;
  const token = obj.useToken(importDefault(689).colors.THEME_LOCKED_BLUR_FALLBACK);
  const tmp2 = callback3();
  obj = { blurTheme: "dark" };
  let tmp5;
  if (!flag) {
    tmp5 = token;
  }
  obj.android_fallbackColor = tmp5;
  const tmp4Result = callback(require(8416) /* TwinButtons */.BackgroundBlurFill, obj);
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
const result = require("jsxProd").fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelVisualEffectView.tsx");

export const VoicePanelVisualEffectView = memoResult;
