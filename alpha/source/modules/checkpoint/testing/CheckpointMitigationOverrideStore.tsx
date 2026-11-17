// Module ID: 19703
// Function ID: 19704
// Name: CheckpointMitigationOverrideStore
// Dependencies: [560, 18364, 2]
// Exports: getCheckpointMitigationMock

// Module 19703 (CheckpointMitigationOverrideStore)
import CheckpointMockData from "CheckpointMockData" /* 18364 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const useCheckpointMitigationOverrideStore = module_560.create(() => ({ isNoCharacter: false, isCompactAssets: false }));
const result = size.fileFinishedImporting("modules/checkpoint/testing/CheckpointMitigationOverrideStore.tsx");

export { useCheckpointMitigationOverrideStore };
export function getCheckpointMitigationMock() {
  let COMPACT_ASSETS;
  let NO_CHARACTER;
  let obj;
  const state = obj.getState();
  const isCompactAssets = state.isCompactAssets;
  if (state.isNoCharacter) {
    NO_CHARACTER = CheckpointMockData.CheckpointMocks.NO_CHARACTER;
  } else {
    NO_CHARACTER = {};
  }
  obj = {};
  const merged = Object.assign(NO_CHARACTER);
  if (isCompactAssets) {
    COMPACT_ASSETS = CheckpointMockData.CheckpointMocks.COMPACT_ASSETS;
  } else {
    COMPACT_ASSETS = {};
  }
  const merged1 = Object.assign(COMPACT_ASSETS);
  return obj;
}
