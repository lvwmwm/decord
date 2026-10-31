// Module ID: 11849
// Function ID: 11850
// Name: ModeratorOverlayState
// Dependencies: [1254, 1259, 4929, 2]
// Exports: useModeratorOverlayChannelState

// Module 11849 (ModeratorOverlayState)
import _slicedToArray from "_slicedToArray" /* 4929 */;
import module_1254 from "module_1254" /* 1254 */;
import size from "module_2" /* 2 */;

let closure_2 = module_1254.createWithEqualityFn((arg0, arg1) => {
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

export function useModeratorOverlayChannelState(id) {
  let closure_0 = id;
  const obj = closure_2((overlayDismissedChannelIds) => overlayDismissedChannelIds.overlayDismissedChannelIds, _slicedToArray.shallow);
  let closure_1 = closure_2((dismissOverlay) => dismissOverlay.dismissOverlay, _slicedToArray.shallow);
  const items = [!obj.has(id), () => closure_1(closure_0)];
  return items;
}
