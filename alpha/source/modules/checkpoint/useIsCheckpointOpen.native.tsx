// Module ID: 18154
// Function ID: 18155
// Name: useIsCheckpointOpen
// Dependencies: [12626, 5219, 2]
// Exports: useIsCheckpointOpen

// Module 18154 (useIsCheckpointOpen)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5219 */;
import CheckpointModalConstants from "CheckpointModalConstants" /* 12626 */;
import size from "module_2" /* 2 */;

const CHECKPOINT_MODAL_KEY = CheckpointModalConstants.CHECKPOINT_MODAL_KEY;
const result = size.fileFinishedImporting("modules/checkpoint/useIsCheckpointOpen.native.tsx");

export function useIsCheckpointOpen() {
  const obj = NavigationRouteUtils;
  return obj.useIsModalOpen(CHECKPOINT_MODAL_KEY);
}
