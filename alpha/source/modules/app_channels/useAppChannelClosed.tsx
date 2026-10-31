// Module ID: 18672
// Function ID: 18673
// Name: useAppChannelClosed
// Dependencies: [32, 19, 6847, 12095, 2]
// Exports: default

// Module 18672 (useAppChannelClosed)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import FramesConstants from "FramesConstants" /* 6847 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let closure_4;
let hasOwnProperty;
({ isLaunched: closure_4, makeFrameId: hasOwnProperty } = FramesConstants);
const set = new Set();
const result = size.fileFinishedImporting("modules/app_channels/useAppChannelClosed.tsx");

export default function useAppChannelClosed(shouldStartClosed) {
  let applicationId;
  let closure_1;
  let surface;
  let tmp17;
  ({ applicationId, surface } = shouldStartClosed);
  let first;
  shouldStartClosed = shouldStartClosed.shouldStartClosed;
  let tmp = closure_5(applicationId, surface);
  const tmp2 = first(12095)(applicationId, surface);
  let obj = react;
  const tmp3 = _slicedToArray(react.useState(null), 2);
  first = tmp3[0];
  dependencyMap = tmp5;
  let frameId;
  if (first != null) {
    frameId = first.frameId;
  }
  if (frameId !== tmp) {
    const obj2 = { frameId: tmp, hasLaunched: false, isClosed: tmp17 };
    tmp17 = null == tmp2;
    if (tmp17) {
      tmp17 = set.has(tmp) || shouldStartClosed();
      set.has(tmp) || shouldStartClosed();
    }
    tmp3[1](obj2);
  } else {
    if (closure_4(tmp2)) {
      if (!first.hasLaunched) {
        const obj3 = { hasLaunched: true };
        let merged = Object.assign(first);
        tmp3[1](obj3);
      }
    }
    const tmp12 = null == tmp2 && first.hasLaunched && !first.isClosed;
    if (tmp12) {
      const obj4 = { isClosed: true };
      const merged1 = Object.assign(first);
      tmp3[1](obj4);
    }
  }
  const items = [first];
  const effect = obj.useEffect(() => {
    let hasLaunched;
    if (first != null) {
      hasLaunched = tmp.hasLaunched;
    }
    if (true === hasLaunched) {
      if (first.isClosed) {
        set.add(first.frameId);
      } else {
        set.delete(first.frameId);
      }
    }
  }, items);
  let frameId1;
  if (first != null) {
    frameId1 = first.frameId;
  }
  return {
    isClosed: frameId1 === tmp && first.isClosed,
    launch() {
      let tmp = closure_1((arg0) => {
        let tmp = arg0;
        if (null != arg0) {
          const obj = { hasLaunched: false, isClosed: false };
          const merged = Object.assign(arg0);
          tmp = obj;
        }
        return tmp;
      });
    }
  };
};
