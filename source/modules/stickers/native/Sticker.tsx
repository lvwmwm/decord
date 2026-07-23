// Module ID: 9615
// Function ID: 74901
// Name: getStickerAssetUrl
// Dependencies: [31, 27, 1278, 33, 4799, 4466, 1212, 7686, 9616, 5085, 3976, 5152, 5153, 2]
// Exports: default

// Module 9615 (getStickerAssetUrl)
import "result";
import { PixelRatio } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
function getStickerAssetUrl(sticker, closure_7, animated) {
  if (sticker.format_type === require(4799) /* StickerFormat */.StickerFormat.LOTTIE) {
    let stickerAssetUrl = require(4466) /* getStickerPackPreviewSticker */.getStickerAssetUrl(sticker);
    const obj5 = require(4466) /* getStickerPackPreviewSticker */;
  } else if (sticker.format_type === require(4799) /* StickerFormat */.StickerFormat.APNG) {
    let obj = { isPreview: !animated, size: closure_7 };
    stickerAssetUrl = require(4466) /* getStickerPackPreviewSticker */.getStickerAssetUrl(sticker, obj);
    const obj3 = require(4466) /* getStickerPackPreviewSticker */;
  } else {
    obj = require(4466) /* getStickerPackPreviewSticker */;
    obj = { isPreview: !animated, size: PixelRatio.getPixelSizeForLayoutSize(closure_7) };
    stickerAssetUrl = obj.getStickerAssetUrl(sticker, obj);
  }
  let str = "";
  if (null != stickerAssetUrl) {
    str = stickerAssetUrl;
  }
  return str;
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/stickers/native/Sticker.tsx");

export default function Sticker(opaque) {
  let animated;
  let size;
  let sticker;
  ({ sticker, size, animated } = opaque);
  if (animated === undefined) {
    animated = true;
  }
  let flag = opaque.opaque;
  if (flag === undefined) {
    flag = true;
  }
  let num = 0.3;
  if (flag) {
    num = 1;
  }
  const tmp = getStickerAssetUrl(sticker, size, animated);
  const intl = require(1212) /* getSystemLocale */.intl;
  let obj = { stickerName: sticker.name };
  const formatToPlainStringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.rk6pOw, obj);
  if (sticker.format_type === require(4799) /* StickerFormat */.StickerFormat.LOTTIE) {
    obj = { url: tmp };
    const id = sticker.id;
    let str4 = "";
    if (null != id) {
      str4 = id;
    }
    obj.asset = str4;
    obj.width = size;
    obj.height = size;
    obj.opacity = num;
    const NativeLottieRenderMode = require(7686) /* NativeLottieView */.NativeLottieRenderMode;
    obj.renderMode = animated ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL;
    obj.accessibilityLabel = formatToPlainStringResult;
    return jsx(importDefault(7686), { url: tmp });
  } else {
    if (sticker.format_type === require(4799) /* StickerFormat */.StickerFormat.APNG) {
      if ("type" in sticker) {
        let obj1 = require(4466) /* getStickerPackPreviewSticker */;
      }
      obj = {};
      obj1 = { height: size, width: size, opacity: num };
      obj.style = obj1;
      obj.url = tmp;
      let obj4 = require(4466) /* getStickerPackPreviewSticker */;
      const _HermesInternal = HermesInternal;
      obj.name = "" + sticker.id + "." + obj4.getStickerExtensionFromFormatType(sticker.format_type);
      obj.accessibilityLabel = formatToPlainStringResult;
      const obj2 = {};
      const merged = Object.assign(obj);
      return jsx(importDefault(9616), {});
    }
    const obj3 = { resizeMode: "contain" };
    obj4 = { height: size, width: size, opacity: num };
    obj3.style = obj4;
    const tmp14 = jsx;
    const tmp17 = importDefault(5085);
    if (obj9.isThemeDark(theme.theme)) {
      let tmp20Result = tmp20(5152);
    } else {
      tmp20Result = tmp20(5153);
    }
    obj3.placeholder = tmp20Result;
    const obj5 = { uri: tmp };
    obj3.source = obj5;
    obj3.accessible = true;
    obj3.accessibilityLabel = formatToPlainStringResult;
    return tmp14(tmp17, obj3);
  }
};
export { getStickerAssetUrl };
