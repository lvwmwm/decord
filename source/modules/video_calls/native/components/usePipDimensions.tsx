// Module ID: 10535
// Function ID: 82334
// Name: usePipDimensions
// Dependencies: []
// Exports: default

// Module 10535 (usePipDimensions)
let closure_3 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/video_calls/native/components/usePipDimensions.tsx");

export default function usePipDimensions(channelId) {
  let forcedOrientation = channelId.forcedOrientation;
  if (forcedOrientation === undefined) {
    forcedOrientation = null;
  }
  const arg1 = forcedOrientation;
  let importDefault;
  let dependencyMap;
  let React;
  const isViewingActivity = arg1(dependencyMap[1]).useIsViewingActivity({ channelId: channelId.channelId });
  importDefault = isViewingActivity;
  const size = importDefault(dependencyMap[2])();
  const width = size.width;
  dependencyMap = width;
  const height = size.height;
  React = height;
  const items = [height, width, forcedOrientation, isViewingActivity];
  return React.useMemo(() => {
    let tmp = width > height;
    let tmp2 = forcedOrientation === forcedOrientation(width[3]).OrientationType.LANDSCAPE;
    if (!tmp2) {
      let tmp3 = tmp;
      if (tmp) {
        tmp3 = forcedOrientation !== forcedOrientation(width[3]).OrientationType.PORTRAIT;
      }
      tmp2 = tmp3;
    }
    let num = 96;
    let num2 = 96;
    if (!isViewingActivity) {
      if (!tmp) {
        if (!tmp2) {
          const _Math = Math;
          const bound = Math.min(0.25 * height, 300);
          num = bound * 0.5625;
          num2 = bound;
        }
      }
      if (!tmp) {
        if (tmp2) {
          const _Math2 = Math;
          const bound1 = Math.min(0.5 * width, 400);
          num2 = bound1 * 0.5625;
          num = bound1;
        }
      }
      if (tmp) {
        if (tmp2) {
          const _Math4 = Math;
          const bound2 = Math.min(0.25 * width, 400);
          num2 = bound2 * 0.5625;
          num = bound2;
        }
      }
      if (tmp) {
        tmp = !tmp2;
      }
      num = 1;
      num2 = 1;
      if (tmp) {
        const _Math3 = Math;
        const bound3 = Math.min(0.5 * height, 300);
        num = bound3 * 0.5625;
        num2 = bound3;
      }
    }
    const obj = { height: num2, width: num };
    return obj;
  }, items);
};
