// Module ID: 9636
// Function ID: 9637
// Name: Sticker
// Dependencies: [19, 17, 1182, 21, 5581, 5198, 1115, 7442, 9637, 5899, 4685, 6552, 6553, 2]
// Exports: default, getStickerAssetUrl

// Module 9636 (Sticker)
import util from "util" /* 1115 */;
import StickersTypes from "StickersTypes" /* 5581 */;
import FastImageDefault from "FastImage" /* 5899 */;
import NativeLottieViewDefault from "NativeLottieView" /* 7442 */;
import NativeAPNGViewDefault from "NativeAPNGView" /* 9637 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1182 */;

require = fn;
const PixelRatio = fn(17).PixelRatio;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/native/Sticker.tsx");

export default function Sticker(opaque) {
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
  if (sticker.format_type === StickersTypes.StickerFormat.LOTTIE) {
    let str = tmp(5198).getStickerAssetUrl(sticker);
    const tmpResult = tmp(5198);
  } else if (sticker.format_type === tmp(5581).StickerFormat.APNG) {
    const obj = { isPreview: !animated, size };
    str = tmp(5198).getStickerAssetUrl(sticker, obj);
    const tmpResult6 = tmp(5198);
  } else {
    const obj2 = { isPreview: !animated, size: PixelRatio.getPixelSizeForLayoutSize(size) };
    str = tmp(5198).getStickerAssetUrl(sticker, obj2);
    const tmpResult7 = tmp(5198);
  }
  if (str == null) {
    str = "";
  }
  const intl = tmp(1115).intl;
  const formatToPlainStringResult = intl.formatToPlainString(util.t.rk6pOw, { stickerName: sticker.name });
  if (sticker.format_type === StickersTypes.StickerFormat.LOTTIE) {
    const size1 = { url: str, asset: null, width: null, height: null, opacity: null, renderMode: null, accessibilityLabel: null };
    let str4 = sticker.id;
    if (str4 == null) {
      str4 = "";
    }
    size1.asset = str4;
    size1.width = size;
    size1.height = size;
    size1.opacity = num;
    const NativeLottieRenderMode = tmp(7442).NativeLottieRenderMode;
    size1.renderMode = animated ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL;
    size1.accessibilityLabel = formatToPlainStringResult;
    return jsx(NativeLottieViewDefault, { url: str, asset: null, width: null, height: null, opacity: null, renderMode: null, accessibilityLabel: null });
  } else {
    if (sticker.format_type === tmp(5581).StickerFormat.APNG) {
      if ("type" in sticker) {
        const tmpResult8 = tmp(5198);
      }
      const obj4 = { style: null, url: null, name: null, accessibilityLabel: null };
      const size2 = { height: size, width: size, opacity: num };
      obj4.style = size2;
      obj4.url = str;
      const _HermesInternal = HermesInternal;
      obj4.name = "" + sticker.id + "." + tmp(5198).getStickerExtensionFromFormatType(sticker.format_type);
      obj4.accessibilityLabel = formatToPlainStringResult;
      const obj5 = {};
      const tmpResult9 = tmp(5198);
      const merged = Object.assign(obj4);
      return jsx(NativeAPNGViewDefault, {});
    }
    const obj6 = { resizeMode: "contain", style: null, placeholder: null, source: null, accessible: true, accessibilityLabel: null };
    const size3 = { height: size, width: size, opacity: num };
    obj6.style = size3;
    const tmp12 = jsx;
    const tmp14 = FastImageDefault;
    if (tmpResult10.isThemeDark(ThemeStore.theme)) {
      let tmp13Result = tmp13(6552);
    } else {
      tmp13Result = tmp13(6553);
    }
    obj6.placeholder = tmp13Result;
    const obj7 = { uri: str };
    obj6.source = obj7;
    obj6.accessibilityLabel = formatToPlainStringResult;
    return tmp12(tmp14, obj6);
  }
  const obj3 = { stickerName: sticker.name };
};
export const getStickerAssetUrl = function getStickerAssetUrl(sticker, STICKER_SIZE, isAnimated) {
  if (sticker.format_type === StickersTypes.StickerFormat.LOTTIE) {
    let str = tmp(5198).getStickerAssetUrl(sticker);
    const tmpResult = tmp(5198);
  } else if (sticker.format_type === tmp(5581).StickerFormat.APNG) {
    const obj = { isPreview: !isAnimated, size: STICKER_SIZE };
    str = tmp(5198).getStickerAssetUrl(sticker, obj);
    const tmpResult3 = tmp(5198);
  } else {
    const obj2 = { isPreview: !isAnimated, size: PixelRatio.getPixelSizeForLayoutSize(STICKER_SIZE) };
    str = tmp(5198).getStickerAssetUrl(sticker, obj2);
    const tmpResult4 = tmp(5198);
  }
  if (str == null) {
    str = "";
  }
  return str;
};
