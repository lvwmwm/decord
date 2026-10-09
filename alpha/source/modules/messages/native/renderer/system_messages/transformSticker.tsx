// Module ID: 7998
// Function ID: 7999
// Name: transformSticker
// Dependencies: [2044, 5746, 7999, 7877, 1126, 2041, 2]
// Exports: transformSticker

// Module 7998 (transformSticker)
import intl3 from "intl" /* 1126 */;
import StickersConstants from "StickersConstants" /* 2044 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const StickerAnimationSettings = StickersConstants.StickerAnimationSettings;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/transformSticker.tsx");

export const transformSticker = function transformSticker(tmp2Result4) {
  let ALWAYS_ANIMATE;
  let NativeLottieRenderMode;
  let closure_0;
  let getAccessibilityLabelOrCheapFallbackUnsafe;
  let intl;
  let intl2;
  let obj3;
  let setting;
  let str;
  let str2;
  const AnimateStickers = require("UserSettings").AnimateStickers;
  _require = tmp2Result4;
  let obj = { asset: str, url: str2, renderMode: setting === ALWAYS_ANIMATE ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL, accessibilityLabel: getAccessibilityLabelOrCheapFallbackUnsafe(obj3), accessibilityHint: intl2.string(require("intl").t.GCEruV) };
  setting = AnimateStickers.getSetting();
  ALWAYS_ANIMATE = StickerAnimationSettings.ALWAYS_ANIMATE;
  const merged = Object.assign(tmp2Result4);
  str = tmp2Result4.id;
  if (str == null) {
    str = "";
  }
  const obj2 = { isPreview: setting !== ALWAYS_ANIMATE };
  const tmpResult = require("StickersUtils");
  str2 = tmpResult.getStickerAssetUrl(tmp2Result4, obj2);
  if (str2 == null) {
    str2 = "";
  }
  NativeLottieRenderMode = tmp(7999).NativeLottieRenderMode;
  obj3 = {
    expensive() {
      const intl = intl3.intl;
      const obj = { stickerName: tmp2Result4.name };
      return intl.formatToPlainString(intl3.t.rk6pOw, obj);
    },
    cheap: intl.string(require("intl").t["fT+Yjp"])
  };
  getAccessibilityLabelOrCheapFallbackUnsafe = require("getAccessibilityLabelOrCheapFallbackUnsafe").getAccessibilityLabelOrCheapFallbackUnsafe;
  require("getAccessibilityLabelOrCheapFallbackUnsafe");
  intl = tmp(1126).intl;
  intl2 = tmp(1126).intl;
  return obj;
};
