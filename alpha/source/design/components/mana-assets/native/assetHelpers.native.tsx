// Module ID: 6272
// Function ID: 6273
// Name: react-native
// Dependencies: [17, 2]
// Exports: getAssetResizeMode, getAssetSizeStyle, getAssetSource

// Module 6272 (react-native)
import react_native from "react-native" /* 17 */;
import size_mod from "module_2" /* 2 */;

const PixelRatio = react_native.PixelRatio;
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/assetHelpers.native.tsx");

export const getAssetSource = function getAssetSource(arg0) {
  return arg0[Math.min(Math, Math.ceil(Math, PixelRatio.get(PixelRatio)), 3)];
};
export const getAssetSizeStyle = function getAssetSizeStyle(size) {
  let height;
  let intrinsicHeight;
  let intrinsicWidth;
  let scale;
  let size2;
  let width;
  ({ width, height, scale } = size);
  if (scale === undefined) {
    scale = 1;
  }
  ({ intrinsicWidth, intrinsicHeight } = size);
  if (null == width) {
    if (null == height) {
      size = { width: intrinsicWidth * scale, height: intrinsicHeight * scale };
      size2 = size;
    }
    return size2;
  }
  if (null != width) {
    if (null != height) {
      const size1 = { width, height };
      size2 = size1;
    }
  }
  size2 = { width, height, aspectRatio: intrinsicWidth / intrinsicHeight };
};
export const getAssetResizeMode = function getAssetResizeMode(resizeMode) {
  let str = "contain";
  if (null != resizeMode) {
    str = resizeMode;
  }
  return str;
};
