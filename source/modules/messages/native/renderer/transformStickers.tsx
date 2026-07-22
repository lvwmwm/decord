// Module ID: 12202
// Function ID: 93764
// Name: transformStickers
// Dependencies: []
// Exports: default

// Module 12202 (transformStickers)
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/transformStickers.tsx");

export default function transformStickers(message) {
  ({ animateStickersSetting: closure_0, isUserInteracting: closure_1 } = message);
  let closure_2 = require(dependencyMap[0]).shouldSkipAccessibilityLabels();
  const obj = require(dependencyMap[0]);
  const messageStickers = require(dependencyMap[1]).getMessageStickers(message.message);
  return messageStickers.map((id) => {
    let obj = callback(closure_1[1]);
    const shouldAnimateStickerResult = obj.shouldAnimateSticker(callback, closure_1);
    obj = {};
    const merged = Object.assign(id);
    id = id.id;
    let str = "";
    let str2 = "";
    if (null != id) {
      str2 = id;
    }
    obj["asset"] = str2;
    obj = { isPreview: !shouldAnimateStickerResult };
    const stickerAssetUrl = callback(closure_1[1]).getStickerAssetUrl(id, obj);
    if (null != stickerAssetUrl) {
      str = stickerAssetUrl;
    }
    obj["url"] = str;
    obj["width"] = 160;
    obj["height"] = 160;
    const NativeLottieRenderMode = callback(closure_1[2]).NativeLottieRenderMode;
    obj["renderMode"] = shouldAnimateStickerResult ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL;
    const intl = callback(closure_1[3]).intl;
    if (closure_2) {
      let stringResult = intl.string(tmp4(tmp5[3]).t.fT+Yjp);
    } else {
      const obj1 = { stickerName: id.name };
      stringResult = intl.formatToPlainString(tmp4(tmp5[3]).t.rk6pOw, obj1);
    }
    obj["accessibilityLabel"] = stringResult;
    const intl2 = callback(closure_1[3]).intl;
    obj["accessibilityHint"] = intl2.string(callback(closure_1[3]).t.GCEruV);
    return obj;
  });
};
