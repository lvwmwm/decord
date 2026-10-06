// Module ID: 7445
// Function ID: 7446
// Name: transformSticker
// Dependencies: [2030, 5199, 7446, 7397, 1127, 2027, 2]
// Exports: transformSticker

// Module 7445 (transformSticker)
import intl3 from "intl" /* 1127 */;
import StickersConstants from "StickersConstants" /* 2030 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const StickerAnimationSettings = StickersConstants.StickerAnimationSettings;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/transformSticker.tsx");

export const transformSticker = function transformSticker(tmp5Result8) {
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
  _require = tmp5Result8;
  let obj = { asset: str, url: str2, renderMode: setting === ALWAYS_ANIMATE ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL, accessibilityLabel: getAccessibilityLabelOrCheapFallbackUnsafe(obj3), accessibilityHint: intl2.string(require("intl").t.GCEruV) };
  setting = AnimateStickers.getSetting();
  ALWAYS_ANIMATE = StickerAnimationSettings.ALWAYS_ANIMATE;
  const merged = Object.assign(tmp5Result8);
  str = tmp5Result8.id;
  if (str == null) {
    str = "";
  }
  const obj2 = { isPreview: setting !== ALWAYS_ANIMATE };
  const tmpResult = require("StickersUtils");
  str2 = tmpResult.getStickerAssetUrl(tmp5Result8, obj2);
  if (str2 == null) {
    str2 = "";
  }
  NativeLottieRenderMode = tmp(7446).NativeLottieRenderMode;
  obj3 = {
    expensive() {
      const intl = intl3.intl;
      const obj = { stickerName: tmp5Result8.name };
      return intl.formatToPlainString(intl3.t.rk6pOw, obj);
    },
    cheap: intl.string(require("intl").t["fT+Yjp"])
  };
  getAccessibilityLabelOrCheapFallbackUnsafe = require("getAccessibilityLabelOrCheapFallbackUnsafe").getAccessibilityLabelOrCheapFallbackUnsafe;
  require("getAccessibilityLabelOrCheapFallbackUnsafe");
  intl = tmp(1127).intl;
  intl2 = tmp(1127).intl;
  return obj;
};
