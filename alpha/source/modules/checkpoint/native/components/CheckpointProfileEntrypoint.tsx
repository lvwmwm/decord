// Module ID: 19238
// Function ID: 19239
// Name: CheckpointProfileEntrypoint
// Dependencies: [17, 13667, 21, 13668, 5374, 19239, 2118, 6570, 504, 7038, 1113, 3248, 13647, 2]
// Exports: default

// Module 19238 (CheckpointProfileEntrypoint)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import intl3 from "intl" /* 1113 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import _modDef3248 from "module_3248" /* 3248 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import CheckpointExperiments from "CheckpointExperiments" /* 6570 */;
import TableRow2 from "TableRow" /* 7038 */;
import ExperimentalCheckpointIcon from "ExperimentalCheckpointIcon" /* 13647 */;
import openCheckpoint from "openCheckpoint" /* 13668 */;
import CheckpointStore from "CheckpointStore" /* 13667 */;
import size from "module_2" /* 2 */;

function handlePress() {
  const obj = openCheckpoint;
  obj.openCheckpoint("user_profile");
}
function handleLongPress() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(19239, dependencyMap.paths), "CheckpointTestingActionSheet");
}
function CheckpointProfileEntrypointRow() {
  let isFetching;
  let tmp5Result;
  const obj = CheckpointExperiments;
  const isCheckpointQAEnabled = obj.useIsCheckpointQAEnabled("CheckpointProfileEntrypoint");
  const items = [CheckpointStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => isFetching.isFetching);
  const TableRow = TableRow2.TableRow;
  const intl = intl3.intl;
  const intl2 = intl3.intl;
  if (stateFromStores) {
    tmp5Result = tmp5(ActivityIndicator, {});
  } else {
    const obj4 = { IconComponent: ExperimentalCheckpointIcon.ExperimentalCheckpointIcon };
    const Icon = tmp(7038).TableRow.Icon;
    tmp5Result = tmp5(Icon, obj4);
  }
  let tmp8;
  if (isCheckpointQAEnabled) {
    tmp8 = handleLongPress;
  }
  return <TableRow label={intl.string(_modDef3248["8hclXY"])} subLabel={intl2.string(_modDef3248.BFc4lY)} icon={tmp5Result} onPress={handlePress} onLongPress={tmp8} arrow start end />;
}
const ActivityIndicator = react_native.ActivityIndicator;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointProfileEntrypoint.tsx");

export default function CheckpointProfileEntrypoint() {
  let tmp = null;
  const obj = CheckpointExperiments;
  if (obj.useIsCheckpointEnabled("CheckpointProfileEntrypoint")) {
    tmp = <CheckpointProfileEntrypointRow />;
  }
  return tmp;
};
