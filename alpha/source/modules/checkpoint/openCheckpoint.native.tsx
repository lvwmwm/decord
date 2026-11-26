// Module ID: 12625
// Function ID: 12626
// Name: openCheckpoint
// Dependencies: [12626, 5219, 2024, 12627, 5257, 12628, 12629, 6130, 12630, 2120, 2]
// Exports: openCheckpoint

// Module 12625 (openCheckpoint)
import react_nativeDefault from "react-native" /* 2024 */;
import asyncRequire from "asyncRequire" /* 2120 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5219 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import CheckpointModalConstants from "CheckpointModalConstants" /* 12626 */;
import _modDef12627 from "module_12627" /* 12627 */;
import CheckpointActionCreators from "CheckpointActionCreators" /* 12628 */;
import useCheckpointGuildsBarEntrypoint from "useCheckpointGuildsBarEntrypoint" /* 12629 */;
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
    const obj3 = { uri: _modDef12627 };
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
    obj7.pushLazy(asyncRequire(12630, tmp2.paths), obj5, tmp3);
    resolved = Promise.resolve(true);
  }
  return resolved;
}
