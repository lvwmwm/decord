// Module ID: 9636
// Function ID: 9637
// Name: Sticker
// Dependencies: [19, 17, 1182, 21, 5581, 5198, 1115, 7442, 9637, 5899, 4685, 6552, 6553, 2]
// Exports: default, getStickerAssetUrl

// Module 9636 (Sticker)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import shared from "shared" /* 4685 */;
import StickersUtils from "StickersUtils" /* 5198 */;
import StickersTypes from "StickersTypes" /* 5581 */;
import FastImageDefault from "FastImage" /* 5899 */;
import NativeLottieViewDefault from "NativeLottieView" /* 7442 */;
import NativeAPNGViewDefault from "NativeAPNGView" /* 9637 */;
import react from "react" /* 19 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import size from "module_2" /* 2 */;

const PixelRatio = react_native.PixelRatio;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/stickers/native/Sticker.tsx");

export default function Sticker(opaque) {
  let NativeLottieRenderMode;
  let animated;
  let id;
  let obj7;
  let size2;
  let size3;
  let sticker;
  let str;
  let str4;
  let tmp14Result;
  let tmpResult9;
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
    const tmpResult = StickersUtils;
    str = tmpResult.getStickerAssetUrl(sticker);
  } else if (sticker.format_type === StickersTypes.StickerFormat.APNG) {
    const obj2 = { isPreview: !animated, size };
    const tmpResult6 = StickersUtils;
    str = tmpResult6.getStickerAssetUrl(sticker, obj2);
  } else {
    const obj = { isPreview: !animated, size: PixelRatio.getPixelSizeForLayoutSize(size) };
    const getStickerAssetUrl = StickersUtils.getStickerAssetUrl;
    StickersUtils;
    str = getStickerAssetUrl(sticker, obj);
  }
  if (str == null) {
    str = "";
  }
  const intl = tmp(1115).intl;
  const obj3 = { stickerName: sticker.name };
  const formatToPlainStringResult = intl.formatToPlainString(intl2.t.rk6pOw, obj3);
  if (sticker.format_type === StickersTypes.StickerFormat.LOTTIE) {
    const size1 = { url: str, asset: str4, width: size, height: size, opacity: num, renderMode: animated ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL, accessibilityLabel: formatToPlainStringResult };
    str4 = sticker.id;
    const tmp18 = jsx;
    const tmp20 = NativeLottieViewDefault;
    if (str4 == null) {
      str4 = "";
    }
    NativeLottieRenderMode = tmp(7442).NativeLottieRenderMode;
    return tmp18(tmp20, size1);
  } else {
    if (sticker.format_type === StickersTypes.StickerFormat.APNG) {
      if ("type" in sticker) {
        StickersUtils;
      }
      const obj4 = { style: size2, url: str, name: "" + id + "." + tmpResult9.getStickerExtensionFromFormatType(sticker.format_type), accessibilityLabel: formatToPlainStringResult };
      size2 = { height: size, width: size, opacity: num };
      id = sticker.id;
      const _HermesInternal = HermesInternal;
      tmpResult9 = StickersUtils;
      NativeAPNGViewDefault;
      const merged = Object.assign(obj4);
      return <tmp9 />;
    }
    const obj6 = { resizeMode: "contain", style: size3, placeholder: tmp14Result, source: obj7, accessible: true, accessibilityLabel: formatToPlainStringResult };
    size3 = { height: size, width: size, opacity: num };
    const tmp15 = FastImageDefault;
    const tmp13 = jsx;
    const tmpResult10 = shared;
    if (tmpResult10.isThemeDark(ThemeStore.theme)) {
      tmp14Result = tmp14(6552);
    } else {
      tmp14Result = tmp14(6553);
    }
    obj7 = { uri: str };
    return tmp13(tmp15, obj6);
  }
};
export const getStickerAssetUrl = function getStickerAssetUrl(sticker, STICKER_SIZE, isAnimated) {
  let str;
  if (sticker.format_type === StickersTypes.StickerFormat.LOTTIE) {
    const tmpResult = StickersUtils;
    str = tmpResult.getStickerAssetUrl(sticker);
  } else if (sticker.format_type === StickersTypes.StickerFormat.APNG) {
    const obj2 = { isPreview: !isAnimated, size: STICKER_SIZE };
    const tmpResult3 = StickersUtils;
    str = tmpResult3.getStickerAssetUrl(sticker, obj2);
  } else {
    const obj = { isPreview: !isAnimated, size: PixelRatio.getPixelSizeForLayoutSize(STICKER_SIZE) };
    const getStickerAssetUrl = StickersUtils.getStickerAssetUrl;
    StickersUtils;
    str = getStickerAssetUrl(sticker, obj);
  }
  if (str == null) {
    str = "";
  }
  return str;
};
