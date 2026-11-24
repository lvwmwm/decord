// Module ID: 17983
// Function ID: 17984
// Name: useIsCheckpointOpen
// Dependencies: [12413, 5093, 2]
// Exports: useIsCheckpointOpen

// Module 17983 (useIsCheckpointOpen)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5093 */;
import CheckpointModalConstants from "CheckpointModalConstants" /* 12413 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ CHECKPOINT_MODAL_KEY: c2, CHECKPOINT_UNAVAILABLE_MODAL_KEY: c3 } = CheckpointModalConstants);
const result = size.fileFinishedImporting("modules/checkpoint/useIsCheckpointOpen.native.tsx");

export function useIsCheckpointOpen() {
  const obj = NavigationRouteUtils;
  let isModalOpen = obj.useIsModalOpen(React2);
  const obj2 = NavigationRouteUtils;
  if (!isModalOpen) {
    isModalOpen = obj2.useIsModalOpen(_false);
  }
  return isModalOpen;
}
