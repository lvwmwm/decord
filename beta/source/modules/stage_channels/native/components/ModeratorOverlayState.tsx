// Module ID: 8941
// Function ID: 8942
// Name: ModeratorOverlayState
// Dependencies: [1243, 1248, 4452, 2]
// Exports: useModeratorOverlayChannelState

// Module 8941 (ModeratorOverlayState)
import _slicedToArray from "_slicedToArray" /* 4452 */;
import module_1243 from "module_1243" /* 1243 */;
import size from "module_2" /* 2 */;

let closure_2 = module_1243.createWithEqualityFn((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = {
    overlayDismissedChannelIds: new Set(),
    dismissOverlay(arg0) {
      const overlayDismissedChannelIds = closure_1().overlayDismissedChannelIds;
      overlayDismissedChannelIds.add(arg0);
      let obj = overlayDismissedChannelIds(closure_1[1]);
      obj.batchUpdates(() => {
        const obj = { overlayDismissedChannelIds };
        return overlayDismissedChannelIds(obj);
      });
    }
  };
  new Set();
  return obj;
});
const result = size.fileFinishedImporting("modules/stage_channels/native/components/ModeratorOverlayState.tsx");

export const useModeratorOverlayChannelState = function useModeratorOverlayChannelState(id) {
  let closure_0 = id;
  const obj = closure_2((overlayDismissedChannelIds) => overlayDismissedChannelIds.overlayDismissedChannelIds, _slicedToArray.shallow);
  let closure_1 = closure_2((dismissOverlay) => dismissOverlay.dismissOverlay, _slicedToArray.shallow);
  const items = [!obj.has(id), () => closure_1(closure_0)];
  return items;
};
