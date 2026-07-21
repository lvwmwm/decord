// Module ID: 7678
// Function ID: 61318
// Name: transform
// Dependencies: []
// Exports: default, transformSticker

// Module 7678 (transform)
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
  const stickerAssetUrl = isPreview(dependencyMap[2]).getStickerAssetUrl(id, obj);
  if (null != stickerAssetUrl) {
    str = stickerAssetUrl;
  }
  obj["url"] = str;
  const NativeLottieRenderMode = isPreview(dependencyMap[3]).NativeLottieRenderMode;
  obj["renderMode"] = isPreview ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL;
  const intl = isPreview(dependencyMap[4]).intl;
  if (arg2) {
    let stringResult = intl.string(tmp3(tmp4[4]).t.fT+Yjp);
  } else {
    obj = { stickerName: id.name };
    stringResult = intl.formatToPlainString(tmp3(tmp4[4]).t.rk6pOw, obj);
  }
  obj["accessibilityLabel"] = stringResult;
  const intl2 = isPreview(dependencyMap[4]).intl;
  obj["accessibilityHint"] = intl2.string(isPreview(dependencyMap[4]).t.GCEruV);
  return obj;
}
let closure_2 = importAll(dependencyMap[0]);
const StickerAnimationSettings = arg1(dependencyMap[1]).StickerAnimationSettings;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/messages/native/renderer/system_messages/transformSticker.tsx");

export default function useTransformedSticker(sticker) {
  sticker = sticker.sticker;
  const arg1 = sticker;
  const isStickerReplyEnabled = sticker.isStickerReplyEnabled;
  const dependencyMap = isStickerReplyEnabled;
  const AnimateStickers = arg1(dependencyMap[5]).AnimateStickers;
  const tmp = AnimateStickers.useSetting() === StickerAnimationSettings.ALWAYS_ANIMATE;
  const React = tmp;
  const result = arg1(dependencyMap[6]).shouldSkipAccessibilityLabels();
  const StickerAnimationSettings = result;
  const items = [tmp, isStickerReplyEnabled, result, sticker];
  return React.useMemo(() => {
    let tmp;
    if (isStickerReplyEnabled) {
      tmp = callback(sticker, tmp, result);
    }
    return tmp;
  }, items);
};
export const transformSticker = function transformSticker(arg0) {
  const AnimateStickers = arg1(dependencyMap[5]).AnimateStickers;
  const setting = AnimateStickers.getSetting();
  return transform(arg0, setting === StickerAnimationSettings.ALWAYS_ANIMATE, arg1(dependencyMap[6]).shouldSkipAccessibilityLabels());
};
