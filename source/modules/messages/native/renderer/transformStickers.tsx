// Module ID: 12343
// Function ID: 96155
// Name: transformStickers
// Dependencies: [7730, 4466, 7775, 1212, 2]
// Exports: default

// Module 12343 (transformStickers)
const result = require("NativeLottieView").fileFinishedImporting("modules/messages/native/renderer/transformStickers.tsx");

export default function transformStickers(message) {
  let dependencyMap;
  let require;
  ({ animateStickersSetting: require, isUserInteracting: dependencyMap } = message);
  let closure_2 = require(7730) /* apexExperiment */.shouldSkipAccessibilityLabels();
  let obj = require(7730) /* apexExperiment */;
  const messageStickers = require(4466) /* getStickerPackPreviewSticker */.getMessageStickers(message.message);
  return messageStickers.map((id) => {
    let obj = outer1_0(outer1_1[1]);
    const shouldAnimateStickerResult = obj.shouldAnimateSticker(closure_0, closure_1);
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
    const stickerAssetUrl = outer1_0(outer1_1[1]).getStickerAssetUrl(id, obj);
    if (null != stickerAssetUrl) {
      str = stickerAssetUrl;
    }
    obj["url"] = str;
    obj["width"] = 160;
    obj["height"] = 160;
    const NativeLottieRenderMode = outer1_0(outer1_1[2]).NativeLottieRenderMode;
    obj["renderMode"] = shouldAnimateStickerResult ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL;
    const intl = outer1_0(outer1_1[3]).intl;
    if (closure_2) {
      let stringResult = intl.string(tmp4(tmp5[3]).t["fT+Yjp"]);
    } else {
      const obj1 = { stickerName: id.name };
      stringResult = intl.formatToPlainString(tmp4(tmp5[3]).t.rk6pOw, obj1);
    }
    obj["accessibilityLabel"] = stringResult;
    const intl2 = outer1_0(outer1_1[3]).intl;
    obj["accessibilityHint"] = intl2.string(outer1_0(outer1_1[3]).t.GCEruV);
    return obj;
  });
};
