// Module ID: 10756
// Function ID: 83615
// Name: useActiveSpeakerPillScrollHandler
// Dependencies: [357040128, 131072, 528089088, 452984832, 553648128, 503316480]
// Exports: useActiveSpeakerPillScrollHandler, useActiveSpeakerPillState

// Module 10756 (useActiveSpeakerPillScrollHandler)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = arg1(dependencyMap[2]).createWithEqualityFn((arg0) => {
  const arg1 = arg0;
  const obj = {
    linear: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000044245640687327334,
    Globe Single Line: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001732031649845995,
    ignoreNotificationSetting: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001385258042816805,
    setShowActiveSpeakerPill(arg0) {
      return arg0(closure_1[3]).batchUpdates(() => arg0({ showActiveSpeakerPill: arg0 }));
    },
    setListRef(arg0) {
      return arg0(closure_1[3]).batchUpdates(() => arg0({ listRef: arg0 }));
    }
  };
  return obj;
});
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/stage_channels/native/StageChannelListStore.tsx");

export const useActiveSpeakerPillScrollHandler = function useActiveSpeakerPillScrollHandler() {
  const tmp = callback(callback2((arg0) => {
    const items = [, ];
    ({ listRef: arr[0], setListRef: arr[1] } = arg0);
    return items;
  }, arg1(dependencyMap[4]).shallow), 2);
  const first = tmp[0];
  const arg1 = first;
  const dependencyMap = tmp3;
  const items = [tmp[1]];
  const items1 = [
    React.useCallback((arg0) => {
      tmp3(arg0);
    }, items),

  ];
  const items2 = [first];
  items1[1] = React.useCallback(() => {
    if (null != first) {
      first.scrollToLocation({});
    }
  }, items2);
  return items1;
};
export const useActiveSpeakerPillState = function useActiveSpeakerPillState() {
  return callback2((arg0) => {
    const items = [, ];
    ({ showActiveSpeakerPill: arr[0], setShowActiveSpeakerPill: arr[1] } = arg0);
    return items;
  }, arg1(dependencyMap[4]).shallow);
};
