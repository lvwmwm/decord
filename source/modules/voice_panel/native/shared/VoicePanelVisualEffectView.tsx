// Module ID: 15967
// Function ID: 123253
// Name: VoicePanelVisualEffectView
// Dependencies: [31, 27, 33, 4165, 689, 3869, 1324, 8212, 2]

// Module 15967 (VoicePanelVisualEffectView)
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let StyleSheet;
let closure_3;
let closure_4;
let closure_5;
const require = arg1;
({ StyleSheet, View: closure_3 } = get_ActivityIndicator);
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let obj = {};
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.wrapper = obj;
_createForOfIteratorHelperLoose = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["borderWidth"] = 1;
_createForOfIteratorHelperLoose["borderColor"] = require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE;
_createForOfIteratorHelperLoose["borderRadius"] = require("_createForOfIteratorHelperLoose").modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS;
obj.border = _createForOfIteratorHelperLoose;
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo(function VoicePanelVisualEffectViewInner(matchAppTheme) {
  let flag = matchAppTheme.matchAppTheme;
  if (flag === undefined) {
    flag = false;
  }
  let obj = require(3869) /* map */;
  const token = obj.useToken(importDefault(689).colors.THEME_LOCKED_BLUR_FALLBACK);
  const tmp2 = callback3();
  obj = { blurTheme: "dark" };
  let tmp5;
  if (!flag) {
    tmp5 = token;
  }
  obj.android_fallbackColor = tmp5;
  const tmp4Result = callback(require(8212) /* TwinButtons */.BackgroundBlurFill, obj);
  let tmp7 = tmp4Result;
  if (tmp3) {
    obj = { style: tmp2.wrapper };
    const items = [tmp4Result, ];
    const obj1 = { style: tmp2.border };
    items[1] = callback(closure_3, obj1);
    obj.children = items;
    tmp7 = callback2(closure_3, obj);
  }
  return tmp7;
});
const result = require("jsxProd").fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelVisualEffectView.tsx");

export const VoicePanelVisualEffectView = memoResult;
