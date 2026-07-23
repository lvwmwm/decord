// Module ID: 7685
// Function ID: 61377
// Name: transform
// Dependencies: [31, 3806, 4466, 7686, 1212, 3803, 7641, 2]
// Exports: default, transformSticker

// Module 7685 (transform)
import result from "result";
import { StickerAnimationSettings } from "STICKER_PICKER_TAB_PANEL_ID";

const require = arg1;
function transform(id, isPreview) {
  let obj = {};
  const merged = Object.assign(id);
  id = id.id;
  let str = "";
  let str2 = "";
  if (null != id) {
    str2 = id;
  }
  obj["asset"] = str2;
  obj = { isPreview: !isPreview };
  const stickerAssetUrl = require(4466) /* getStickerPackPreviewSticker */.getStickerAssetUrl(id, obj);
  if (null != stickerAssetUrl) {
    str = stickerAssetUrl;
  }
  obj["url"] = str;
  const NativeLottieRenderMode = require(7686) /* NativeLottieView */.NativeLottieRenderMode;
  obj["renderMode"] = isPreview ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL;
  const intl = require(1212) /* getSystemLocale */.intl;
  if (arg2) {
    let stringResult = intl.string(tmp3(1212).t["fT+Yjp"]);
  } else {
    obj = { stickerName: id.name };
    stringResult = intl.formatToPlainString(tmp3(1212).t.rk6pOw, obj);
  }
  obj["accessibilityLabel"] = stringResult;
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj["accessibilityHint"] = intl2.string(require(1212) /* getSystemLocale */.t.GCEruV);
  return obj;
}
let result = require("getStickerPackPreviewSticker").fileFinishedImporting("modules/messages/native/renderer/system_messages/transformSticker.tsx");

export default function useTransformedSticker(sticker) {
  sticker = sticker.sticker;
  const isStickerReplyEnabled = sticker.isStickerReplyEnabled;
  const AnimateStickers = sticker(isStickerReplyEnabled[5]).AnimateStickers;
  let tmp = AnimateStickers.useSetting() === StickerAnimationSettings.ALWAYS_ANIMATE;
  const React = tmp;
  const result = sticker(isStickerReplyEnabled[6]).shouldSkipAccessibilityLabels();
  StickerAnimationSettings = result;
  const items = [tmp, isStickerReplyEnabled, result, sticker];
  return React.useMemo(() => {
    let tmp;
    if (isStickerReplyEnabled) {
      tmp = outer1_4(sticker, result, closure_3);
    }
    return tmp;
  }, items);
};
export const transformSticker = function transformSticker(arg0) {
  const AnimateStickers = require(3803) /* explicitContentFromProto */.AnimateStickers;
  const setting = AnimateStickers.getSetting();
  return transform(arg0, setting === StickerAnimationSettings.ALWAYS_ANIMATE, require(7641) /* apexExperiment */.shouldSkipAccessibilityLabels());
};
