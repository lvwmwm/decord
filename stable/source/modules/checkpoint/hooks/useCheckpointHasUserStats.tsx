// Module ID: 14480
// Function ID: 14481
// Name: useCheckpointHasUserStats
// Dependencies: [14255, 504, 2]
// Exports: default

// Module 14480 (useCheckpointHasUserStats)
import get_initialized from "get initialized" /* 504 */;
import CheckpointStore2 from "CheckpointStore" /* 14255 */;
import size from "module_2" /* 2 */;

const CheckpointStore = CheckpointStore2;

const CheckpointFetchStates = CheckpointStore2.CheckpointFetchStates;
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useCheckpointHasUserStats.tsx");

export default function useCheckpointHasUserStats() {
  const items = [CheckpointStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => CheckpointStore.fetchState !== constants.SUCCESS || null != CheckpointStore.stats);
};
