// Module ID: 18630
// Function ID: 18631
// Name: useAppChannelClosed
// Dependencies: [32, 19, 6841, 12057, 2]
// Exports: default

// Module 18630 (useAppChannelClosed)
import useFrameBySurfaceDefault from "useFrameBySurface" /* 12057 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import FramesConstants from "FramesConstants" /* 6841 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ isLaunched: closure_4, makeFrameId: hasOwnProperty } = FramesConstants);
const result = size.fileFinishedImporting("modules/app_channels/useAppChannelClosed.tsx");

export default function useAppChannelClosed(shouldStartClosed) {
  let applicationId;
  let surface;
  let tmp4;
  let tmp5;
  ({ applicationId, surface } = shouldStartClosed);
  shouldStartClosed = shouldStartClosed.shouldStartClosed;
  let tmp = hasOwnProperty(applicationId, surface);
  const tmp2 = useFrameBySurfaceDefault(applicationId, surface);
  let obj = react;
  [tmp4, tmp5] = _slicedToArray(react.useState(null), 2);
  let c0 = tmp5;
  let frameId;
  const tmp3 = _slicedToArray(react.useState(null), 2);
  if (tmp4 != null) {
    frameId = tmp4.frameId;
  }
  if (frameId !== tmp) {
    const obj2 = { frameId: tmp, hasLaunched: false, isClosed: null == tmp2 && shouldStartClosed() };
    null == tmp2 && shouldStartClosed();
    tmp5(obj2);
  } else {
    if (React3(tmp2)) {
      if (!tmp4.hasLaunched) {
        const obj3 = { hasLaunched: true };
        let merged = Object.assign(tmp4);
        tmp5(obj3);
      }
    }
    const tmp12 = null == tmp2 && tmp4.hasLaunched;
    if (tmp12) {
      const obj4 = { frameId: tmp, hasLaunched: false, isClosed: true };
      tmp5(obj4);
    }
  }
  let frameId1;
  const launch = obj.useCallback(() => _undefined((arg0) => {
    let tmp = arg0;
    if (null != arg0) {
      const obj = { isClosed: false };
      const merged = Object.assign(arg0);
      tmp = obj;
    }
    return tmp;
  }), []);
  if (tmp4 != null) {
    frameId1 = tmp4.frameId;
  }
  const isClosed = frameId1 === tmp && tmp4.isClosed;
  return { isClosed, launch };
};
