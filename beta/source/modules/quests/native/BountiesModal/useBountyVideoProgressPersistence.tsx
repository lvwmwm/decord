// Module ID: 14558
// Function ID: 14559
// Name: useBountyVideoProgressPersistence
// Dependencies: [32, 19, 7115, 14555, 10744, 2]
// Exports: useBountyVideoProgressPersistence

// Module 14558 (useBountyVideoProgressPersistence)
import BountyActionCreators from "BountyActionCreators" /* 10744 */;
import useBountiesModalTiming from "useBountiesModalTiming" /* 14555 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import BountyStore from "BountyStore" /* 7115 */;
import size from "module_2" /* 2 */;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let closure_5 = { timestampSec: 0, maxTimestampSec: 0, duration: 0 };
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountyVideoProgressPersistence.tsx");

export const useBountyVideoProgressPersistence = function useBountyVideoProgressPersistence(bountyId) {
  let items;
  let items1;
  let ref;
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
    bountyVideoProgress = closure_5;
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
};
