// Module ID: 13584
// Function ID: 13585
// Name: transformStickers
// Dependencies: [5137, 8294, 8246, 1119, 2]
// Exports: default

// Module 13584 (transformStickers)
import util from "util" /* 1119 */;
import StickersUtils from "StickersUtils" /* 5137 */;
import getAccessibilityLabelOrCheapFallbackUnsafe from "getAccessibilityLabelOrCheapFallbackUnsafe" /* 8246 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/transformStickers.tsx");

export default function transformStickers(message) {
  ({ animateStickersSetting: require, isUserInteracting: dependencyMap } = message);
  const messageStickers = StickersUtils.getMessageStickers(message.message);
  return messageStickers.map((id) => {
    const name = id;
    const shouldAnimateStickerResult = StickersUtils.shouldAnimateSticker(closure_1_0, dependencyMap);
    const obj2 = {};
    const merged = Object.assign(id);
    let str = id.id;
    if (str == null) {
      str = "";
    }
    obj2.asset = str;
    let str2 = StickersUtils.getStickerAssetUrl(id, { isPreview: !shouldAnimateStickerResult });
    if (str2 == null) {
      str2 = "";
    }
    obj2.url = str2;
    obj2.width = 160;
    obj2.height = 160;
    const NativeLottieRenderMode = tmp(8294).NativeLottieRenderMode;
    obj2.renderMode = shouldAnimateStickerResult ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL;
    const obj3 = { isPreview: !shouldAnimateStickerResult };
    const tmpResult = StickersUtils;
    const obj4 = {
      expensive() {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.rk6pOw, { stickerName: name.name });
      },
      cheap: null
    };
    let intl = tmp(1119).intl;
    obj4.cheap = intl.string(util.t["fT+Yjp"]);
    obj2.accessibilityLabel = getAccessibilityLabelOrCheapFallbackUnsafe.getAccessibilityLabelOrCheapFallbackUnsafe(obj4);
    const intl2 = tmp(1119).intl;
    obj2.accessibilityHint = intl2.string(util.t.GCEruV);
    return obj2;
  });
};
