// Module ID: 10773
// Function ID: 83711
// Name: useActiveSpeakerPillScrollHandler
// Dependencies: [57, 31, 677, 682, 3743, 2]
// Exports: useActiveSpeakerPillScrollHandler, useActiveSpeakerPillState

// Module 10773 (useActiveSpeakerPillScrollHandler)
import _slicedToArray from "_slicedToArray";
import result from "result";
import useStoreWithEqualityFn from "useStoreWithEqualityFn";

const require = arg1;
let closure_4 = useStoreWithEqualityFn.createWithEqualityFn((arg0) => {
  let closure_0 = arg0;
  const obj = {
    showActiveSpeakerPill: false,
    setShowActiveSpeakerPill(arg0) {
      const callback = arg0;
      return callback(outer1_1[3]).batchUpdates(() => callback({ showActiveSpeakerPill: callback }));
    },
    listRef: null,
    setListRef(arg0) {
      const callback = arg0;
      return callback(outer1_1[3]).batchUpdates(() => callback({ listRef: callback }));
    }
  };
  return obj;
});
const result = require("useStoreWithEqualityFn").fileFinishedImporting("modules/stage_channels/native/StageChannelListStore.tsx");

export const useActiveSpeakerPillScrollHandler = function useActiveSpeakerPillScrollHandler() {
  const tmp = callback(callback2((arg0) => {
    const items = [, ];
    ({ listRef: arr[0], setListRef: arr[1] } = arg0);
    return items;
  }, first(3743).shallow), 2);
  first = tmp[0];
  const dependencyMap = tmp3;
  let items = [tmp[1]];
  const items1 = [
    React.useCallback((arg0) => {
      tmp3(arg0);
    }, items),

  ];
  const items2 = [first];
  items1[1] = React.useCallback(() => {
    if (null != first) {
      first.scrollToLocation({ section: 0, item: 0, animated: true });
    }
  }, items2);
  return items1;
};
export const useActiveSpeakerPillState = function useActiveSpeakerPillState() {
  return callback2((arg0) => {
    const items = [, ];
    ({ showActiveSpeakerPill: arr[0], setShowActiveSpeakerPill: arr[1] } = arg0);
    return items;
  }, require(3743) /* isIterable */.shallow);
};
