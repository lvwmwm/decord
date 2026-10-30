// Module ID: 11673
// Function ID: 11674
// Name: usePipDimensions
// Dependencies: [19, 11674, 1492, 8894, 2]
// Exports: default

// Module 11673 (usePipDimensions)
import DeviceOrientation from "DeviceOrientation" /* 8894 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

let c4 = 0.5625;
let size = size_mod;
const result = size.fileFinishedImporting("modules/video_calls/native/components/usePipDimensions.tsx");

export default function usePipDimensions(forcedOrientation) {
  forcedOrientation = forcedOrientation.forcedOrientation;
  const channelId = forcedOrientation.channelId;
  if (forcedOrientation === undefined) {
    forcedOrientation = null;
  }
  let width;
  const obj = forcedOrientation(width[1]);
  const isViewingActivity = obj.useIsViewingActivity({ channelId });
  size = isViewingActivity(width[2])();
  width = size.width;
  let height = size.height;
  const items = [height, width, forcedOrientation, isViewingActivity];
  return height.useMemo(() => {
    let tmp3 = width > height;
    let tmp7 = forcedOrientation === DeviceOrientation.OrientationType.LANDSCAPE;
    if (!tmp7) {
      tmp7 = tmp3 && tmp4 !== tmp5(8894).OrientationType.PORTRAIT;
      tmp3 && forcedOrientation !== DeviceOrientation.OrientationType.PORTRAIT;
    }
    height = 96;
    width = 96;
    if (!isViewingActivity) {
      if (!tmp3) {
        if (!tmp7) {
          const _Math = Math;
          const bound = Math.min(0.25 * tmp2, 300);
          width = bound * c4;
          height = bound;
        }
      }
      if (!tmp3) {
        if (tmp7) {
          const _Math2 = Math;
          const bound1 = Math.min(0.5 * tmp, 400);
          height = bound1 * c4;
          width = bound1;
        }
      }
      if (tmp3) {
        if (tmp7) {
          const _Math4 = Math;
          const bound2 = Math.min(0.25 * tmp, 400);
          height = bound2 * c4;
          width = bound2;
        }
      }
      if (tmp3) {
        tmp3 = !tmp7;
      }
      height = 1;
      width = 1;
      if (tmp3) {
        const _Math3 = Math;
        const bound3 = Math.min(0.5 * tmp2, 300);
        width = bound3 * c4;
        height = bound3;
      }
    }
    return { height, width };
  }, items);
};
