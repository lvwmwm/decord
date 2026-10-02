// Module ID: 9898
// Function ID: 9899
// Name: Sticker
// Dependencies: [19, 17, 1194, 21, 5582, 5199, 558, 576, 1127, 7446, 9899, 5896, 4687, 6553, 6554, 2]
// Exports: getStickerAssetUrl

// Module 9898 (Sticker)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1127 */;
import shared from "shared" /* 4687 */;
import StickersUtils from "StickersUtils" /* 5199 */;
import StickersTypes from "StickersTypes" /* 5582 */;
import FastImageDefault from "FastImage" /* 5896 */;
import NativeLottieViewDefault from "NativeLottieView" /* 7446 */;
import NativeAPNGViewDefault from "NativeAPNGView" /* 9899 */;
import react from "react" /* 19 */;
import ThemeStore from "ThemeStore" /* 1194 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const PixelRatio = react_native.PixelRatio;
const jsx = Fragment.jsx;
function getStickerAssetUrl(sticker, STICKER_SIZE, isAnimated) {
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
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let animated;
  let num;
  let opaque;
  let sticker;
  let str;
  let tmp27Result;
  const obj = react2;
  const cResult = obj.c(32);
  ({ sticker, size, animated, opaque } = arg0);
  if (undefined === opaque) {
    num = 1;
  } else {
    num = 0.3;
  }
  if (cResult[0] === (undefined === animated || animated)) {
    if (cResult[1] === size) {
      let tmp5;
      let tmp8;
      if (cResult[2] === sticker) {
        tmp5 = cResult[3];
      }
      if (cResult[4] !== sticker.name) {
        const intl = tmp(1127).intl;
        const obj2 = { stickerName: sticker.name };
        const formatToPlainStringResult = intl.formatToPlainString(intl2.t.rk6pOw, obj2);
        cResult[4] = sticker.name;
        cResult[5] = formatToPlainStringResult;
        tmp8 = formatToPlainStringResult;
      } else {
        tmp8 = cResult[5];
      }
      if (sticker.format_type === StickersTypes.StickerFormat.LOTTIE) {
        let str4 = sticker.id;
        if (str4 == null) {
          str4 = "";
        }
        const NativeLottieRenderMode = tmp(7446).NativeLottieRenderMode;
        const tmp33 = undefined === animated || animated ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL;
        if (cResult[6] === tmp8) {
          if (cResult[7] === num) {
            if (cResult[8] === size) {
              if (cResult[9] === tmp5) {
                if (cResult[10] === str4) {
                  let tmp34;
                  if (cResult[11] === tmp33) {
                    tmp34 = cResult[12];
                  }
                  return tmp34;
                }
              }
            }
          }
        }
        const tmp37 = jsx(NativeLottieViewDefault, { url: tmp5, asset: str4, width: size, height: size, opacity: num, renderMode: tmp33, accessibilityLabel: tmp8 });
        cResult[6] = tmp8;
        cResult[7] = num;
        cResult[8] = size;
        cResult[9] = tmp5;
        cResult[10] = str4;
        cResult[11] = tmp33;
        cResult[12] = tmp37;
        tmp34 = tmp37;
      } else {
        if (sticker.format_type === StickersTypes.StickerFormat.APNG) {
          if ("type" in sticker) {
            StickersUtils;
          }
          if (cResult[13] === num) {
            let tmp10;
            let tmp11;
            if (cResult[14] === size) {
              tmp10 = cResult[15];
            }
            const id = sticker.id;
            if (cResult[16] !== sticker.format_type) {
              const tmpResult6 = StickersUtils;
              const stickerExtensionFromFormatType = tmpResult6.getStickerExtensionFromFormatType(sticker.format_type);
              cResult[16] = sticker.format_type;
              cResult[17] = stickerExtensionFromFormatType;
              tmp11 = stickerExtensionFromFormatType;
            } else {
              tmp11 = cResult[17];
            }
            const _HermesInternal = HermesInternal;
            const combined = "" + id + "." + tmp11;
            if (cResult[18] === tmp8) {
              if (cResult[19] === tmp5) {
                if (cResult[20] === tmp10) {
                  let tmp15;
                  if (cResult[21] === combined) {
                    tmp15 = cResult[22];
                  }
                  return tmp15;
                }
              }
            }
            const obj3 = { style: tmp10, url: tmp5, name: combined, accessibilityLabel: tmp8 };
            NativeAPNGViewDefault;
            const merged = Object.assign(obj3);
            const tmp22 = <tmp18 />;
            cResult[18] = tmp8;
            cResult[19] = tmp5;
            cResult[20] = tmp10;
            cResult[21] = combined;
            cResult[22] = tmp22;
            tmp15 = tmp22;
          }
          const size2 = { height: size, width: size, opacity: num };
          cResult[13] = num;
          cResult[14] = size;
          cResult[15] = size2;
          tmp10 = size2;
        }
        if (cResult[23] === num) {
          let tmp23;
          let tmp24;
          if (cResult[24] === size) {
            tmp23 = cResult[25];
          }
          if (cResult[26] !== tmp5) {
            const obj5 = { uri: tmp5 };
            cResult[26] = tmp5;
            cResult[27] = obj5;
            tmp24 = obj5;
          } else {
            tmp24 = cResult[27];
          }
          if (cResult[28] === tmp8) {
            if (cResult[29] === tmp23) {
              let tmp25;
              if (cResult[30] === tmp24) {
                tmp25 = cResult[31];
              }
              return tmp25;
            }
          }
          const obj6 = { resizeMode: "contain", style: tmp23, placeholder: tmp27Result, source: tmp24, accessible: true, accessibilityLabel: tmp8 };
          const tmp28 = FastImageDefault;
          const tmp26 = jsx;
          const tmpResult7 = shared;
          if (tmpResult7.isThemeDark(ThemeStore.theme)) {
            tmp27Result = tmp27(6553);
          } else {
            tmp27Result = tmp27(6554);
          }
          const tmp26Result = tmp26(tmp28, obj6);
          cResult[28] = tmp8;
          cResult[29] = tmp23;
          cResult[30] = tmp24;
          cResult[31] = tmp26Result;
          tmp25 = tmp26Result;
        }
        const size3 = { height: size, width: size, opacity: num };
        cResult[23] = num;
        cResult[24] = size;
        cResult[25] = size3;
        tmp23 = size3;
      }
    }
  }
  if (sticker.format_type === StickersTypes.StickerFormat.LOTTIE) {
    const tmpResult8 = StickersUtils;
    str = tmpResult8.getStickerAssetUrl(sticker);
  } else if (sticker.format_type === StickersTypes.StickerFormat.APNG) {
    const obj7 = { isPreview: !(undefined === animated || animated), size };
    const tmpResult9 = StickersUtils;
    str = tmpResult9.getStickerAssetUrl(sticker, obj7);
  } else {
    const obj8 = { isPreview: !(undefined === animated || animated), size: PixelRatio.getPixelSizeForLayoutSize(size) };
    const getStickerAssetUrl = StickersUtils.getStickerAssetUrl;
    StickersUtils;
    str = getStickerAssetUrl(sticker, obj8);
  }
  if (str == null) {
    str = "";
  }
  cResult[0] = undefined === animated || animated;
  cResult[1] = size;
  cResult[2] = sticker;
  cResult[3] = str;
  tmp5 = str;
}) : ((opaque) => {
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
  const intl = tmp(1127).intl;
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
    NativeLottieRenderMode = tmp(7446).NativeLottieRenderMode;
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
      tmp14Result = tmp14(6553);
    } else {
      tmp14Result = tmp14(6554);
    }
    obj7 = { uri: str };
    return tmp13(tmp15, obj6);
  }
});
const result = size.fileFinishedImporting("modules/stickers/native/Sticker.tsx");

export default tmp3;
export { getStickerAssetUrl };
