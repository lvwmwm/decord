// Module ID: 12280
// Function ID: 95918
// Name: getMediaViewerStateForScreen
// Dependencies: [8320, 2]
// Exports: default

// Module 12280 (getMediaViewerStateForScreen)
let result = require("set").fileFinishedImporting("modules/media_viewer/native/getMediaViewerStateForScreen.tsx");

export default function getMediaViewerStateForScreen(width, height, closure_1) {
  let obj = require(8320) /* _createForOfIteratorHelperLoose */;
  const size = obj.flattenSource(closure_1, true);
  if (null == size) {
    obj = { maximumZoomScale: 1, width, height };
    return obj;
  } else {
    const result = width / height;
    const result1 = size.width / size.height;
    if (size.width < width) {
      if (size.height < height) {
        if (result1 > result) {
          let result2 = size.width / width;
        } else {
          result2 = size.height / height;
        }
        const _Math5 = Math;
        const bound = Math.min(0.5, result2 / 1.01);
        obj = {};
        let num6 = 1;
        if (0 !== bound) {
          num6 = 1 / bound;
        }
        obj.maximumZoomScale = num6;
        ({ width: obj4.width, height: obj4.height } = size);
        return obj;
      }
    }
    if (result1 > result) {
      const result3 = width / size.width;
      const obj1 = { maximumZoomScale: 1 / result3 + 1 };
      const _Math3 = Math;
      obj1.width = Math.floor(width);
      const _Math4 = Math;
      obj1.height = Math.floor(size.height * result3);
      return obj1;
    } else {
      const result4 = height / size.height;
      const obj2 = { maximumZoomScale: 1 / result4 + 1 };
      const _Math = Math;
      obj2.width = Math.floor(size.width * result4);
      const _Math2 = Math;
      obj2.height = Math.floor(height);
      return obj2;
    }
  }
};
