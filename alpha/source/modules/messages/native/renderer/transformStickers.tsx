// Module ID: 15062
// Function ID: 15063
// Name: transformStickers
// Dependencies: [6547, 8414, 8336, 1125, 2]
// Exports: default

// Module 15062 (transformStickers)
import intl3 from "intl" /* 1125 */;
import StickersUtils from "StickersUtils" /* 6547 */;
import getAccessibilityLabelOrCheapFallbackUnsafe2 from "getAccessibilityLabelOrCheapFallbackUnsafe" /* 8336 */;
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
    NativeLottieRenderMode = tmp(8414).NativeLottieRenderMode;
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
    intl = tmp(1125).intl;
    intl2 = tmp(1125).intl;
    return obj2;
  });
};
