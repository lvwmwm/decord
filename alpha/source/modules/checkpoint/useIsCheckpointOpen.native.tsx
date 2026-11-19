// Module ID: 17967
// Function ID: 17968
// Name: useIsCheckpointOpen
// Dependencies: [12406, 4968, 2]
// Exports: useIsCheckpointOpen

// Module 17967 (useIsCheckpointOpen)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4968 */;
import CheckpointModalConstants from "CheckpointModalConstants" /* 12406 */;
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
