// Module ID: 9505
// Function ID: 9506
// Name: StageChannelListStore
// Dependencies: [32, 19, 1243, 1248, 4452, 2]
// Exports: useActiveSpeakerPillScrollHandler, useActiveSpeakerPillState

// Module 9505 (StageChannelListStore)
import _slicedToArray2 from "_slicedToArray" /* 4452 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import module_1243 from "module_1243" /* 1243 */;
import size from "module_2" /* 2 */;

let closure_4 = module_1243.createWithEqualityFn((arg0) => {
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
const result = size.fileFinishedImporting("modules/stage_channels/native/StageChannelListStore.tsx");

export const useActiveSpeakerPillScrollHandler = function useActiveSpeakerPillScrollHandler() {
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
};
export const useActiveSpeakerPillState = function useActiveSpeakerPillState() {
  return closure_4((arg0) => {
    const items = [, ];
    ({ showActiveSpeakerPill: arr[0], setShowActiveSpeakerPill: arr[1] } = arg0);
    return items;
  }, _slicedToArray2.shallow);
};
