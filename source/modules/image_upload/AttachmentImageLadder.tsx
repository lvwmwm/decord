// Module ID: 1848
// Function ID: 1849
// Name: items
// Dependencies: [2]
// Exports: snapAttachmentDimensions

// Module 1848 (items)
const items = [128, 192, 256, 320, 384, 512, 640, 768, 1024, 1280, 1536, 2048, 3072, 4096];
let result = require("set").fileFinishedImporting("modules/image_upload/AttachmentImageLadder.tsx");

export const ATTACHMENT_LADDER = items;
export const snapAttachmentDimensions = function snapAttachmentDimensions(arg0) {
  let maxUpscale;
  let sourceHeight;
  let sourceWidth;
  let targetHeight;
  let targetWidth;
  ({ targetWidth, targetHeight, sourceWidth, sourceHeight, maxUpscale } = arg0);
  let bound;
  bound = Math.max(targetWidth, targetHeight);
  if (bound <= 0) {
    let obj = { width: null, height: null };
    obj[0] = targetWidth;
    obj[1] = targetHeight;
    return obj;
  } else {
    let found = bound.find((arg0) => bound <= arg0);
    if (found == null) {
      found = arr[arr.length - 1];
    }
    let tmp4 = found;
    if (null != maxUpscale) {
      tmp4 = found;
      if (maxUpscale > 1) {
        for (const item10023 of arr) {
          let tmp7 = item10023;
          if (item10023 <= bound) {
            let tmp = item10023;
            continue;
          } else {
            let tmp8 = obj;
            obj.return();
            break;
          }
          let tmp9 = tmp;
          let tmp10 = null != tmp;
          if (tmp10) {
            let tmp11 = tmp;
            tmp10 = bound <= tmp * maxUpscale;
          }
          tmp4 = found;
          if (tmp10) {
            tmp4 = tmp;
          }
        }
      }
    }
    if (null != sourceWidth) {
      if (null != sourceHeight) {
        const _Math = Math;
        if (Math.max(sourceWidth, sourceHeight) <= tmp4) {
          obj = { width: null, height: null };
          obj[0] = sourceWidth;
          obj[1] = sourceHeight;
          return obj;
        }
      }
    }
    const result = tmp4 / bound;
    const _Math2 = Math;
    const _Math3 = Math;
    const bound1 = Math.max(1, Math.round(targetWidth * result));
    const _Math4 = Math;
    const _Math5 = Math;
    const bound2 = Math.max(1, Math.round(targetHeight * result));
    let bound3 = bound1;
    if (null != sourceWidth) {
      const _Math6 = Math;
      bound3 = Math.min(bound1, sourceWidth);
    }
    const obj1 = { width: null, height: null };
    obj1[0] = bound3;
    let bound4 = bound2;
    if (null != sourceHeight) {
      const _Math7 = Math;
      bound4 = Math.min(bound2, sourceHeight);
    }
    obj1[1] = bound4;
    return obj1;
  }
};
