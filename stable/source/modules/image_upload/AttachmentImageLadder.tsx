// Module ID: 1448
// Function ID: 1449
// Name: AttachmentImageLadder
// Dependencies: [2]
// Exports: getSnapDownMaxUpscale, snapAttachmentDimensions

// Module 1448 (AttachmentImageLadder)
import size_mod from "module_2" /* 2 */;

const items = [128, 192, 256, 320, 384, 512, 640, 768, 1024, 1280, 1536, 2048, 3072, 4096];
let size = size_mod;
let result = size.fileFinishedImporting("modules/image_upload/AttachmentImageLadder.tsx");

export const ATTACHMENT_LADDER = items;
export const ATTACHMENT_LADDER_MAX_UPSCALE = 1.1;
export function getSnapDownMaxUpscale(minSnapDownDpr, arg1) {
  let maxUpscale = null;
  if (arg1 >= minSnapDownDpr.minSnapDownDpr) {
    maxUpscale = minSnapDownDpr.maxUpscale;
  }
  return maxUpscale;
}
export function snapAttachmentDimensions(arg0) {
  let bound4;
  let ladder;
  let maxUpscale;
  let sourceHeight;
  let sourceWidth;
  let targetHeight;
  let targetWidth;
  ({ targetWidth, targetHeight, sourceWidth, sourceHeight, maxUpscale, ladder } = arg0);
  if (ladder === undefined) {
    ladder = items;
  }
  const bound = Math.max(width, height);
  if (bound > 0) {
    if (0 !== ladder.length) {
      let found = ladder.find((item) => bound <= item);
      if (found == null) {
        found = ladder[ladder.length - 1];
      }
      let tmp4 = null != sourceWidth && null != sourceHeight;
      if (tmp4) {
        const _Math = Math;
        tmp4 = Math.max(sourceWidth, sourceHeight) <= found;
      }
      let tmp5 = found;
      if (null != maxUpscale) {
        tmp5 = found;
        if (maxUpscale > 1) {
          tmp5 = found;
          if (!tmp4) {
            for (const item10028 of ladder) {
              let tmp;
              if (item10028 <= bound) {
                tmp = item10028;
                continue;
              } else {
                obj.return();
                break;
              }
              let tmp11 = null != tmp;
              if (tmp11) {
                tmp11 = bound <= tmp * maxUpscale;
              }
              tmp5 = found;
              if (tmp11) {
                tmp5 = tmp;
              }
            }
          }
        }
      }
      if (null != sourceWidth) {
        if (null != sourceHeight) {
          const _Math2 = Math;
          if (Math.max(sourceWidth, sourceHeight) <= tmp5) {
            size = { width: sourceWidth, height: sourceHeight };
            return size;
          }
        }
      }
      const result = tmp5 / bound;
      const _Math3 = Math;
      const _Math4 = Math;
      const bound1 = Math.max(1, Math.round(width * result));
      const _Math5 = Math;
      const _Math6 = Math;
      const bound2 = Math.max(1, Math.round(height * result));
      let bound3 = bound1;
      if (null != sourceWidth) {
        const _Math7 = Math;
        bound3 = Math.min(bound1, sourceWidth);
      }
      const size1 = { width: bound3, height: bound4 };
      bound4 = bound2;
      if (null != sourceHeight) {
        const _Math8 = Math;
        bound4 = Math.min(bound2, sourceHeight);
      }
      return size1;
    }
  }
  return { width, height };
}
