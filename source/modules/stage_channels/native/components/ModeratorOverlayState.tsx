// Module ID: 10623
// Function ID: 82867
// Name: useModeratorOverlayChannelState
// Dependencies: [677, 682, 3743, 2]
// Exports: useModeratorOverlayChannelState

// Module 10623 (useModeratorOverlayChannelState)
import useStoreWithEqualityFn from "useStoreWithEqualityFn";

let closure_2 = useStoreWithEqualityFn.createWithEqualityFn((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const obj = {
    overlayDismissedChannelIds: new Set(),
    dismissOverlay(arg0) {
      const overlayDismissedChannelIds = dependencyMap().overlayDismissedChannelIds;
      overlayDismissedChannelIds.add(arg0);
      callback(682).batchUpdates(() => overlayDismissedChannelIds({ overlayDismissedChannelIds }));
    }
  };
  return obj;
});
const result = require("isIterable").fileFinishedImporting("modules/stage_channels/native/components/ModeratorOverlayState.tsx");

export const useModeratorOverlayChannelState = function useModeratorOverlayChannelState(id) {
  const _require = id;
  const dependencyMap = callback((dismissOverlay) => dismissOverlay.dismissOverlay, _require(3743).shallow);
  const items = [!callback((overlayDismissedChannelIds) => overlayDismissedChannelIds.overlayDismissedChannelIds, _require(3743).shallow).has(id), () => callback(closure_0)];
  return items;
};
