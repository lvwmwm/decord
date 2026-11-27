// Module ID: 18161
// Function ID: 18162
// Name: useIsCheckpointOpen
// Dependencies: [12634, 5219, 2]
// Exports: useIsCheckpointOpen

// Module 18161 (useIsCheckpointOpen)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5219 */;
import CheckpointModalConstants from "CheckpointModalConstants" /* 12634 */;
import size from "module_2" /* 2 */;

const CHECKPOINT_MODAL_KEY = CheckpointModalConstants.CHECKPOINT_MODAL_KEY;
const result = size.fileFinishedImporting("modules/checkpoint/useIsCheckpointOpen.native.tsx");

export function useIsCheckpointOpen() {
  const obj = NavigationRouteUtils;
  return obj.useIsModalOpen(CHECKPOINT_MODAL_KEY);
}
