// Module ID: 10943
// Function ID: 10944
// Name: StageChannelListStore
// Dependencies: [32, 19, 1266, 1271, 558, 576, 4690, 2]

// Module 10943 (StageChannelListStore)
import react2 from "react" /* 576 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import module_1266 from "module_1266" /* 1266 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const _slicedToArray2 = tmp(4690);
let closure_4 = module_1266.createWithEqualityFn((arg0) => {
  let closure_0 = arg0;
  let obj = {
    showActiveSpeakerPill: false,
    setShowActiveSpeakerPill(showActiveSpeakerPill) {
      let obj = showActiveSpeakerPill(dependencyMap[3]);
      return obj.batchUpdates(() => {
        const obj = { showActiveSpeakerPill };
        return showActiveSpeakerPill(obj);
      });
    },
    listRef: null,
    setListRef(listRef) {
      let obj = listRef(dependencyMap[3]);
      return obj.batchUpdates(() => {
        const obj = { listRef };
        return listRef(obj);
      });
    }
  };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useActiveSpeakerPillScrollHandler() {
  let first;
  let tmp8;
  let tmp9;
  let obj = react2;
  const cResult = obj.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l(arg0) {
      const items = [, ];
      ({ listRef: arr[0], setListRef: arr[1] } = arg0);
      return items;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp5 = _slicedToArray(closure_4(first, _slicedToArray2.shallow), 2);
  const first1 = tmp5[0];
  let closure_1 = tmp7;
  if (cResult[1] !== tmp5[1]) {
    const fn2 = function o(arg0) {
      closure_1(arg0);
    };
    cResult[1] = tmp5[1];
    cResult[2] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== first1) {
    const fn3 = function h() {
      const obj = first1;
      if (first1 != null) {
        obj.scrollToLocation({ section: 0, item: 0, animated: true });
      }
    };
    cResult[3] = first1;
    cResult[4] = fn3;
    tmp9 = fn3;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] === tmp9) {
    let tmp10;
    if (cResult[6] === tmp8) {
      tmp10 = cResult[7];
    }
    return tmp10;
  }
  let items = [tmp8, tmp9];
  cResult[5] = tmp9;
  cResult[6] = tmp8;
  cResult[7] = items;
  tmp10 = items;
}) : (function useActiveSpeakerPillScrollHandler() {
  const tmp = _slicedToArray(closure_4((arg0) => {
    const items = [, ];
    ({ listRef: arr[0], setListRef: arr[1] } = arg0);
    return items;
  }, _slicedToArray2.shallow), 2);
  const first = tmp[0];
  let closure_1 = tmp3;
  let items = [tmp[1]];
  const items1 = [
    react.useCallback((arg0) => {
      closure_1(arg0);
    }, items),

  ];
  const items2 = [first];
  items1[1] = react.useCallback(() => {
    const obj = first;
    if (first != null) {
      obj.scrollToLocation({ section: 0, item: 0, animated: true });
    }
  }, items2);
  return items1;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useActiveSpeakerPillState() {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(arg0) {
      const items = [, ];
      ({ showActiveSpeakerPill: arr[0], setShowActiveSpeakerPill: arr[1] } = arg0);
      return items;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return closure_4(first, _slicedToArray2.shallow);
}) : (function useActiveSpeakerPillState() {
  return closure_4((arg0) => {
    const items = [, ];
    ({ showActiveSpeakerPill: arr[0], setShowActiveSpeakerPill: arr[1] } = arg0);
    return items;
  }, _slicedToArray2.shallow);
});
const result = size.fileFinishedImporting("modules/stage_channels/native/StageChannelListStore.tsx");

export const useActiveSpeakerPillScrollHandler = tmp2;
export const useActiveSpeakerPillState = tmp3;
