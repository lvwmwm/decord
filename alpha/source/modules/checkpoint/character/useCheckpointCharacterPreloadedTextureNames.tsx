// Module ID: 12848
// Function ID: 12849
// Name: useCheckpointCharacterPreloadedTextureNames
// Dependencies: [32, 19, 6767, 12849, 2]
// Exports: useCheckpointCharacterPreloadedTextureNames

// Module 12848 (useCheckpointCharacterPreloadedTextureNames)
import CheckpointNavigation from "CheckpointNavigation" /* 6767 */;
import useCheckpointCharacterReferencedAssets from "useCheckpointCharacterReferencedAssets" /* 12849 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const set = new Set();
const obj = {};
const FINALIZE = CheckpointNavigation.CheckpointCharacterStage.FINALIZE;
const items = [useCheckpointCharacterReferencedAssets.WIREFRAME_TEXTURE];
obj[FINALIZE] = new Set(items);
new Set(items);
const result = size.fileFinishedImporting("modules/checkpoint/character/useCheckpointCharacterPreloadedTextureNames.tsx");

export function useCheckpointCharacterPreloadedTextureNames(stage, arg1) {
  let first;
  let tmp3;
  [first, tmp3] = react.useState(null);
  let tmp4 = obj[stage];
  let tmp5 = null != tmp4;
  if (tmp5) {
    tmp5 = stage === first || arg1;
  }
  let tmp7 = null;
  if (tmp5) {
    tmp7 = stage;
  }
  if (tmp7 !== first) {
    tmp3(tmp7);
  }
  if (!tmp5) {
    tmp4 = set;
  }
  return tmp4;
}
