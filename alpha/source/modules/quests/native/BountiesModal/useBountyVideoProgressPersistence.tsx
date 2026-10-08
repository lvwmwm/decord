// Module ID: 15107
// Function ID: 15108
// Name: useBountyVideoProgressPersistence
// Dependencies: [32, 19, 7378, 558, 576, 15104, 11155, 2]

// Module 15107 (useBountyVideoProgressPersistence)
import BountyActionCreators from "BountyActionCreators" /* 11155 */;
import useBountiesModalTiming from "useBountiesModalTiming" /* 15104 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import BountyStore_mod from "BountyStore" /* 7378 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let BountyStore = BountyStore_mod;
let ref = { timestampSec: 0, maxTimestampSec: 0, duration: 0 };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useBountyVideoProgressPersistence(bountyId) {
  let endMode;
  let ref2;
  let ref3;
  let ref4;
  let obj = bountyId(endMode[4]);
  const cResult = obj.c(11);
  bountyId = bountyId.bountyId;
  endMode = bountyId.endMode;
  if (cResult[0] === bountyId) {
    let tmp2;
    let tmp6;
    if (cResult[1] === endMode) {
      tmp2 = cResult[2];
    }
    const first = _slicedToArray(react.useState(tmp2), 1)[0];
    _slicedToArray = react.useRef(0);
    react = react.useRef(first.timestampSec);
    BountyStore = react.useRef(first.maxTimestampSec);
    ref = react.useRef(first.duration);
    if (cResult[3] !== bountyId) {
      const fn2 = function p(current, current2, current3) {
        ref2.current = current3;
        ref3.current = current;
        ref4.current = current2;
        if (current3 >= ref.current) {
          tmp.current = current3 + 1;
          const obj2 = { timestampSec: current3, maxTimestampSec: current, duration: current2 };
          const obj = BountyActionCreators;
          const result = obj.setBountyVideoProgress(bountyId, obj2);
        }
      };
      cResult[3] = bountyId;
      cResult[4] = fn2;
      tmp6 = fn2;
    } else {
      tmp6 = cResult[4];
    }
    if (cResult[5] !== bountyId) {
      class R {
        constructor() {
          const obj = BountyActionCreators;
          const obj2 = { timestampSec: ref2.current, maxTimestampSec: ref3.current, duration: ref4.current };
          const result = obj.setBountyVideoProgress(bountyId, obj2);
        }
      }
      cResult[5] = bountyId;
      cResult[6] = R;
    } else {
      class R {
        constructor() {
          const obj = BountyActionCreators;
          const obj2 = { timestampSec: ref2.current, maxTimestampSec: ref3.current, duration: ref4.current };
          const result = obj.setBountyVideoProgress(bountyId, obj2);
        }
      }
    }
    if (cResult[7] === tmp7) {
      class R {
        constructor() {
          const obj = BountyActionCreators;
          const obj2 = { timestampSec: ref2.current, maxTimestampSec: ref3.current, duration: ref4.current };
          const result = obj.setBountyVideoProgress(bountyId, obj2);
        }
      }
    }
    let obj2 = { initialProgress: first, handleProgress: tmp6, flushProgress: tmp7 };
    cResult[7] = tmp7;
    cResult[8] = tmp6;
    cResult[9] = first;
    cResult[10] = obj2;
  }
  const fn = function c() {
    let bountyVideoProgress = BountyStore.getBountyVideoProgress(bountyId);
    if (null != bountyVideoProgress) {
      if (endMode === useBountiesModalTiming.BountyVideoEndMode.LOOP) {
        const duration = bountyVideoProgress.duration;
        return bountyVideoProgress;
      }
    }
    bountyVideoProgress = ref;
  };
  cResult[0] = bountyId;
  cResult[1] = endMode;
  cResult[2] = fn;
  tmp2 = fn;
}) : (function useBountyVideoProgressPersistence(bountyId) {
  let items;
  let items1;
  let ref2;
  bountyId = bountyId.bountyId;
  const endMode = bountyId.endMode;
  _slicedToArray = undefined;
  react = undefined;
  const first = _slicedToArray(react.useState(() => {
    let bountyVideoProgress = BountyStore.getBountyVideoProgress(bountyId);
    if (null != bountyVideoProgress) {
      if (endMode === useBountiesModalTiming.BountyVideoEndMode.LOOP) {
        const duration = bountyVideoProgress.duration;
        return bountyVideoProgress;
      }
    }
    bountyVideoProgress = ref;
  }), 1)[0];
  _slicedToArray = react.useRef(0);
  react = react.useRef(first.timestampSec);
  const ref3 = react.useRef(first.maxTimestampSec);
  const ref4 = react.useRef(first.duration);
  let obj = {
    initialProgress: first,
    handleProgress: react.useCallback((current, current2, current3) => {
      ref2.current = current3;
      ref3.current = current;
      ref4.current = current2;
      if (current3 >= ref.current) {
        tmp.current = current3 + 1;
        const obj2 = { timestampSec: current3, maxTimestampSec: current, duration: current2 };
        const obj = BountyActionCreators;
        const result = obj.setBountyVideoProgress(bountyId, obj2);
      }
    }, items),
    flushProgress: react.useCallback(() => {
      const obj = BountyActionCreators;
      const obj2 = { timestampSec: ref2.current, maxTimestampSec: ref3.current, duration: ref4.current };
      const result = obj.setBountyVideoProgress(bountyId, obj2);
    }, items1)
  };
  items = [bountyId];
  items1 = [bountyId];
  return obj;
});
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountyVideoProgressPersistence.tsx");

export const useBountyVideoProgressPersistence = tmp2;
