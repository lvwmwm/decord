// Module ID: 10612
// Function ID: 82804
// Name: useModeratorOverlayChannelState
// Dependencies: []
// Exports: useModeratorOverlayChannelState

// Module 10612 (useModeratorOverlayChannelState)
const _module = require(dependencyMap[0]);
let closure_2 = _module.createWithEqualityFn((arg0, arg1) => {
  const require = arg0;
  const dependencyMap = arg1;
  const obj = {
    overlayDismissedChannelIds: new Set(),
    dismissOverlay(arg0) {
      const overlayDismissedChannelIds = arg1().overlayDismissedChannelIds;
      arg0 = overlayDismissedChannelIds;
      overlayDismissedChannelIds.add(arg0);
      arg0(arg1[1]).batchUpdates(() => overlayDismissedChannelIds({ overlayDismissedChannelIds }));
    }
  };
  return obj;
});
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/stage_channels/native/components/ModeratorOverlayState.tsx");

export const useModeratorOverlayChannelState = function useModeratorOverlayChannelState(id) {
  const require = id;
  closure_1 = callback((dismissOverlay) => dismissOverlay.dismissOverlay, require(closure_1[2]).shallow);
  const items = [!callback((overlayDismissedChannelIds) => overlayDismissedChannelIds.overlayDismissedChannelIds, require(closure_1[2]).shallow).has(id), () => callback(arg0)];
  return items;
};
