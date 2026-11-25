// Module ID: 17953
// Function ID: 17954
// Name: useIsCheckpointOpen
// Dependencies: [12501, 5089, 2]
// Exports: useIsCheckpointOpen

// Module 17953 (useIsCheckpointOpen)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5089 */;
import CheckpointModalConstants from "CheckpointModalConstants" /* 12501 */;
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
