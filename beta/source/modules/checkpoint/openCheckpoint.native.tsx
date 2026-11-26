// Module ID: 12500
// Function ID: 12501
// Name: openCheckpoint
// Dependencies: [12501, 5089, 2023, 12502, 5127, 12503, 12504, 6429, 12505, 2119, 2]
// Exports: openCheckpoint

// Module 12500 (openCheckpoint)
import react_nativeDefault from "react-native" /* 2023 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5089 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import CheckpointModalConstants from "CheckpointModalConstants" /* 12501 */;
import _modDef12502 from "module_12502" /* 12502 */;
import CheckpointActionCreators from "CheckpointActionCreators" /* 12503 */;
import useCheckpointGuildsBarEntrypoint from "useCheckpointGuildsBarEntrypoint" /* 12504 */;
import size from "module_2" /* 2 */;

const CHECKPOINT_MODAL_KEY = CheckpointModalConstants.CHECKPOINT_MODAL_KEY;
let result = size.fileFinishedImporting("modules/checkpoint/openCheckpoint.native.tsx");

export function openCheckpoint(devtools, FAKE_DATA) {
  let resolved;
  let obj = FAKE_DATA;
  if (FAKE_DATA === undefined) {
    obj = {};
  }
  const obj2 = NavigationRouteUtils;
  const tmp2 = dependencyMap;
  const tmp3 = CHECKPOINT_MODAL_KEY;
  if (obj2.isModalOpen(CHECKPOINT_MODAL_KEY)) {
    resolved = Promise.resolve(false);
  } else {
    const obj3 = { uri: _modDef12502 };
    const preload = react_nativeDefault.preload;
    react_nativeDefault;
    preload(obj3);
    const obj4 = ActionSheetActionCreatorsDefault;
    obj4.hideAllActionSheets();
    const tmpResult = CheckpointActionCreators;
    const checkpointData = tmpResult.fetchCheckpointData(obj);
    const tmpResult2 = useCheckpointGuildsBarEntrypoint;
    const result = tmpResult2.dismissCheckpointIntro(devtools);
    const obj5 = { source: devtools };
    const obj7 = ModalActionCreatorsDefault;
    obj7.pushLazy(asyncRequire(12505, tmp2.paths), obj5, tmp3);
    resolved = Promise.resolve(true);
  }
  return resolved;
}
