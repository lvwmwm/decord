// Module ID: 9780
// Function ID: 9781
// Name: ModeratorOverlayState
// Dependencies: [1243, 1248, 4411, 2]
// Exports: useModeratorOverlayChannelState

// Module 9780 (ModeratorOverlayState)
import _mod4411 from "module_4411" /* 4411 */;
import identity from "module_1243" /* 1243 */;
import size from "module_2" /* 2 */;

let closure_2 = identity.createWithEqualityFn((arg0, arg1) => {
  closure_0 = arg0;
  dependencyMap = arg1;
  const obj = {
    overlayDismissedChannelIds: new Set(),
    dismissOverlay(arg0) {
      const overlayDismissedChannelIds = dependencyMap().overlayDismissedChannelIds;
      overlayDismissedChannelIds.add(arg0);
      overlayDismissedChannelIds(1248).batchUpdates(() => overlayDismissedChannelIds({ overlayDismissedChannelIds }));
    }
  };
  return obj;
});
const result = size.fileFinishedImporting("modules/stage_channels/native/components/ModeratorOverlayState.tsx");

export const useModeratorOverlayChannelState = function useModeratorOverlayChannelState(id) {
  closure_0 = id;
  closure_1 = closure_2((dismissOverlay) => dismissOverlay.dismissOverlay, _mod4411.shallow);
  const items = [!closure_2((overlayDismissedChannelIds) => overlayDismissedChannelIds.overlayDismissedChannelIds, _mod4411.shallow).has(id), () => closure_1(closure_0)];
  return items;
};
