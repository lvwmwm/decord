// Module ID: 17749
// Function ID: 17750
// Name: useAppChannelClosed
// Dependencies: [32, 19, 6296, 558, 576, 11716, 2]

// Module 17749 (useAppChannelClosed)
import react2 from "react" /* 576 */;
import useFrameBySurfaceDefault from "useFrameBySurface" /* 11716 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import FramesConstants from "FramesConstants" /* 6296 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let _require;

let hasOwnProperty;
let metroRequire;
({ isLaunched: hasOwnProperty, makeFrameId: metroRequire } = FramesConstants);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAppChannelClosed(arg0) {
  let applicationId;
  let shouldStartClosed;
  let surface;
  let tmp11;
  let tmp12;
  let tmp = dependencyMap;
  let obj = react2;
  const cResult = obj.c(9);
  ({ applicationId, surface, shouldStartClosed } = arg0);
  if (cResult[0] === applicationId) {
    let tmp3;
    let tmp25;
    let tmp28;
    if (cResult[1] === surface) {
      tmp3 = cResult[2];
    }
    const tmp6 = useFrameBySurfaceDefault(applicationId, surface);
    [tmp11, tmp12] = react.useState(null);
    _require = tmp12;
    let frameId;
    _slicedToArray(react.useState(null), 2);
    if (tmp11 != null) {
      frameId = tmp11.frameId;
    }
    if (frameId !== tmp3) {
      if (cResult[3] === tmp6) {
        let tmp21;
        if (cResult[4] === shouldStartClosed) {
          tmp21 = cResult[5];
        }
        const obj2 = { frameId: tmp3, hasLaunched: false, isClosed: tmp21 };
        tmp12(obj2);
      }
      const tmp22 = null == tmp6 && shouldStartClosed();
      cResult[3] = tmp6;
      cResult[4] = shouldStartClosed;
      cResult[5] = tmp22;
      tmp21 = tmp22;
    } else {
      if (hasOwnProperty(tmp6)) {
        if (!tmp11.hasLaunched) {
          const obj3 = { hasLaunched: true };
          let merged = Object.assign(tmp11);
          tmp12(obj3);
        }
      }
      const tmp19 = null == tmp6 && tmp11.hasLaunched;
      if (tmp19) {
        const obj4 = { frameId: tmp3, hasLaunched: false, isClosed: true };
        tmp12(obj4);
      }
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor() {
          return closure_0(() => { /* body not rendered: F151361 */ });
        }
      }
      cResult[6] = I;
      tmp25 = I;
    } else {
      class I {
        constructor() {
          return closure_0(() => { /* body not rendered: F151361 */ });
        }
      }
    }
    if (tmp11 != null) {
      class I {
        constructor() {
          return closure_0(() => { /* body not rendered: F151361 */ });
        }
      }
    }
    if (cResult[7] !== (undefined === tmp3 && tmp11.isClosed)) {
      class I {
        constructor() {
          return closure_0(() => { /* body not rendered: F151361 */ });
        }
      }
      tmp29[0] = undefined === tmp3 && tmp11.isClosed;
      tmp29[1] = tmp25;
      cResult[7] = undefined === tmp3 && tmp11.isClosed;
      cResult[8] = tmp29;
      tmp28 = tmp29;
    } else {
      class I {
        constructor() {
          return closure_0(() => { /* body not rendered: F151361 */ });
        }
      }
    }
    return tmp28;
  }
  const tmp4 = metroRequire(applicationId, surface);
  cResult[0] = applicationId;
  cResult[1] = surface;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : (function useAppChannelClosed(shouldStartClosed) {
  let applicationId;
  let surface;
  let tmp4;
  let tmp5;
  ({ applicationId, surface } = shouldStartClosed);
  shouldStartClosed = shouldStartClosed.shouldStartClosed;
  let tmp = metroRequire(applicationId, surface);
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
    if (hasOwnProperty(tmp2)) {
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
});
const result = size.fileFinishedImporting("modules/app_channels/useAppChannelClosed.tsx");

export default tmp3;
