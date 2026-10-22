// Module ID: 14516
// Function ID: 14517
// Name: transformStickers
// Dependencies: [6473, 8345, 8268, 1128, 2]
// Exports: default

// Module 14516 (transformStickers)
import intl3 from "intl" /* 1128 */;
import StickersUtils from "StickersUtils" /* 6473 */;
import getAccessibilityLabelOrCheapFallbackUnsafe2 from "getAccessibilityLabelOrCheapFallbackUnsafe" /* 8268 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/transformStickers.tsx");

export default function transformStickers(message) {
  ({ animateStickersSetting: require, isUserInteracting: dependencyMap } = message);
  message = message.message;
  let obj = StickersUtils;
  const messageStickers = obj.getMessageStickers(message);
  return messageStickers.map((id) => {
    let NativeLottieRenderMode;
    let getAccessibilityLabelOrCheapFallbackUnsafe;
    let intl;
    let intl2;
    let obj4;
    let str;
    let str2;
    let closure_0 = id;
    let obj = StickersUtils;
    const shouldAnimateStickerResult = obj.shouldAnimateSticker(require, dependencyMap);
    const obj2 = { asset: str, url: str2, width: 160, height: 160, renderMode: shouldAnimateStickerResult ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL, accessibilityLabel: getAccessibilityLabelOrCheapFallbackUnsafe(obj4), accessibilityHint: intl2.string(intl3.t.GCEruV) };
    const merged = Object.assign(id);
    str = id.id;
    if (str == null) {
      str = "";
    }
    const obj3 = { isPreview: !shouldAnimateStickerResult };
    const tmpResult = StickersUtils;
    str2 = tmpResult.getStickerAssetUrl(id, obj3);
    if (str2 == null) {
      str2 = "";
    }
    NativeLottieRenderMode = tmp(8345).NativeLottieRenderMode;
    obj4 = {
      expensive() {
        const intl = closure_2_0(closure_2_1[3]).intl;
        const obj = { stickerName: name.name };
        return intl.formatToPlainString(closure_2_0(closure_2_1[3]).t.rk6pOw, obj);
      },
      cheap: intl.string(intl3.t["fT+Yjp"])
    };
    getAccessibilityLabelOrCheapFallbackUnsafe = getAccessibilityLabelOrCheapFallbackUnsafe2.getAccessibilityLabelOrCheapFallbackUnsafe;
    getAccessibilityLabelOrCheapFallbackUnsafe2;
    intl = tmp(1128).intl;
    intl2 = tmp(1128).intl;
    return obj2;
  });
};
