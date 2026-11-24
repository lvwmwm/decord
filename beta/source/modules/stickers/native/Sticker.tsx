// Module ID: 11165
// Function ID: 11166
// Name: Sticker
// Dependencies: [19, 17, 1191, 21, 6387, 6386, 1112, 8736, 5600, 4920, 7497, 7498, 2]
// Exports: default, getStickerAssetUrl

// Module 11165 (Sticker)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import shared from "shared" /* 4920 */;
import FastImageDefault from "FastImage" /* 5600 */;
import StickersUtils from "StickersUtils" /* 6386 */;
import StickersTypes from "StickersTypes" /* 6387 */;
import NativeLottieViewDefault from "NativeLottieView" /* 8736 */;
import react from "react" /* 19 */;
import ThemeStore from "ThemeStore" /* 1191 */;
import size from "module_2" /* 2 */;

const PixelRatio = react_native.PixelRatio;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/stickers/native/Sticker.tsx");

export default function Sticker(opaque) {
  let NativeLottieRenderMode;
  let animated;
  let obj5;
  let size2;
  let sticker;
  let str;
  let str2;
  let tmp11Result;
  let tmp12Result;
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
    const tmpResult4 = StickersUtils;
    str = tmpResult4.getStickerAssetUrl(sticker, obj2);
  } else {
    const obj = { isPreview: !animated, size: PixelRatio.getPixelSizeForLayoutSize(size) };
    const getStickerAssetUrl = StickersUtils.getStickerAssetUrl;
    StickersUtils;
    str = getStickerAssetUrl(sticker, obj);
  }
  if (str == null) {
    str = "";
  }
  const intl = tmp(1112).intl;
  const obj3 = { stickerName: sticker.name };
  const formatToPlainStringResult = intl.formatToPlainString(intl2.t.rk6pOw, obj3);
  if (sticker.format_type === StickersTypes.StickerFormat.LOTTIE) {
    const size1 = { url: str, asset: str2, width: size, height: size, opacity: num, renderMode: animated ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL, accessibilityLabel: formatToPlainStringResult };
    str2 = sticker.id;
    const tmp10 = NativeLottieViewDefault;
    const tmp8 = jsx;
    if (str2 == null) {
      str2 = "";
    }
    NativeLottieRenderMode = tmp(8736).NativeLottieRenderMode;
    tmp11Result = tmp8(tmp10, size1);
  } else {
    const obj4 = { enableAnimation: animated, resizeMode: "contain", style: size2, placeholder: tmp12Result, source: obj5, accessible: true, accessibilityLabel: formatToPlainStringResult };
    size2 = { height: size, width: size, opacity: num };
    const tmp13 = FastImageDefault;
    const tmp11 = jsx;
    const tmpResult6 = shared;
    if (tmpResult6.isThemeDark(ThemeStore.theme)) {
      tmp12Result = tmp12(7497);
    } else {
      tmp12Result = tmp12(7498);
    }
    obj5 = { uri: str };
    tmp11Result = tmp11(tmp13, obj4);
  }
  return tmp11Result;
};
export function getStickerAssetUrl(sticker, STICKER_SIZE, isAnimated) {
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
}
