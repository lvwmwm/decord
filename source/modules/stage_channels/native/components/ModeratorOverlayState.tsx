// Module ID: 10816
// Function ID: 10817
// Name: useModeratorOverlayChannelState
// Dependencies: [700, 705, 3974, 2]
// Exports: useModeratorOverlayChannelState

// Module 10816 (useModeratorOverlayChannelState)
import identity from "identity";

let closure_2 = identity.createWithEqualityFn((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const obj = { overlayDismissedChannelIds: null, dismissOverlay: null };
  obj[0] = new Set();
  obj[1] = function dismissOverlay(arg0) {
    const overlayDismissedChannelIds = dependencyMap().overlayDismissedChannelIds;
    overlayDismissedChannelIds.add(arg0);
    callback(705).batchUpdates(() => overlayDismissedChannelIds({ overlayDismissedChannelIds }));
  };
  return obj;
});
const result = require("isIterable").fileFinishedImporting("modules/stage_channels/native/components/ModeratorOverlayState.tsx");

export const useModeratorOverlayChannelState = function useModeratorOverlayChannelState(id) {
  const _require = id;
  const dependencyMap = callback((dismissOverlay) => dismissOverlay.dismissOverlay, _require(3974).shallow);
  const items = [!callback((overlayDismissedChannelIds) => overlayDismissedChannelIds.overlayDismissedChannelIds, _require(3974).shallow).has(id), () => callback(closure_0)];
  return items;
};
