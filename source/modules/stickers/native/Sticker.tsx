// Module ID: 9607
// Function ID: 74847
// Name: getStickerAssetUrl
// Dependencies: []
// Exports: default

// Module 9607 (getStickerAssetUrl)
function getStickerAssetUrl(sticker, closure_7, animated) {
  if (sticker.format_type === closure_7(dependencyMap[4]).StickerFormat.LOTTIE) {
    let stickerAssetUrl = closure_7(dependencyMap[5]).getStickerAssetUrl(sticker);
    const obj5 = closure_7(dependencyMap[5]);
  } else if (sticker.format_type === closure_7(dependencyMap[4]).StickerFormat.APNG) {
    let obj = { isPreview: !animated, size: closure_7 };
    stickerAssetUrl = closure_7(dependencyMap[5]).getStickerAssetUrl(sticker, obj);
    const obj3 = closure_7(dependencyMap[5]);
  } else {
    obj = closure_7(dependencyMap[5]);
    obj = { isPreview: !animated, size: PixelRatio.getPixelSizeForLayoutSize(closure_7) };
    stickerAssetUrl = obj.getStickerAssetUrl(sticker, obj);
  }
  let str = "";
  if (null != stickerAssetUrl) {
    str = stickerAssetUrl;
  }
  return str;
}
importAll(dependencyMap[0]);
const PixelRatio = arg1(dependencyMap[1]).PixelRatio;
let closure_4 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/stickers/native/Sticker.tsx");

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
  const intl = arg1(dependencyMap[6]).intl;
  let obj = { stickerName: sticker.name };
  const formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[6]).t.rk6pOw, obj);
  if (sticker.format_type === arg1(dependencyMap[4]).StickerFormat.LOTTIE) {
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
    const NativeLottieRenderMode = arg1(dependencyMap[7]).NativeLottieRenderMode;
    obj.renderMode = animated ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL;
    obj.accessibilityLabel = formatToPlainStringResult;
    return jsx(importDefault(dependencyMap[7]), obj);
  } else {
    if (sticker.format_type === arg1(dependencyMap[4]).StickerFormat.APNG) {
      if ("type" in sticker) {
        let obj1 = arg1(dependencyMap[5]);
      }
      obj = {};
      obj1 = { height: size, width: size, opacity: num };
      obj.style = obj1;
      obj.url = tmp;
      let obj4 = arg1(dependencyMap[5]);
      const _HermesInternal = HermesInternal;
      obj.name = "" + sticker.id + "." + obj4.getStickerExtensionFromFormatType(sticker.format_type);
      obj.accessibilityLabel = formatToPlainStringResult;
      const obj2 = {};
      const merged = Object.assign(obj);
      return jsx(importDefault(dependencyMap[8]), obj2);
    }
    const obj3 = { resizeMode: "contain" };
    obj4 = { height: size, width: size, opacity: num };
    obj3.style = obj4;
    const tmp14 = jsx;
    const tmp17 = importDefault(dependencyMap[9]);
    if (obj9.isThemeDark(theme.theme)) {
      let tmp20Result = tmp20(tmp21[11]);
    } else {
      tmp20Result = tmp20(tmp21[12]);
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
