// Module ID: 17957
// Function ID: 17958
// Name: useIsCheckpointOpen
// Dependencies: [12501, 5089, 2]
// Exports: useIsCheckpointOpen

// Module 17957 (useIsCheckpointOpen)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5089 */;
import CheckpointModalConstants from "CheckpointModalConstants" /* 12501 */;
import size from "module_2" /* 2 */;

const CHECKPOINT_MODAL_KEY = CheckpointModalConstants.CHECKPOINT_MODAL_KEY;
const result = size.fileFinishedImporting("modules/checkpoint/useIsCheckpointOpen.native.tsx");

export function useIsCheckpointOpen() {
  const obj = NavigationRouteUtils;
  return obj.useIsModalOpen(CHECKPOINT_MODAL_KEY);
}
