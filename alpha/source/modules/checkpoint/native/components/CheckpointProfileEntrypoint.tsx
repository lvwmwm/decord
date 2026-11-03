// Module ID: 19039
// Function ID: 19040
// Name: CheckpointProfileEntrypoint
// Dependencies: [17, 13571, 21, 13570, 5381, 19040, 2123, 6208, 504, 7101, 1113, 3219, 13552, 2]
// Exports: default

// Module 19039 (CheckpointProfileEntrypoint)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import intl3 from "intl" /* 1113 */;
import asyncRequire from "asyncRequire" /* 2123 */;
import _modDef3219 from "module_3219" /* 3219 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import CheckpointExperiments from "CheckpointExperiments" /* 6208 */;
import TableRow2 from "TableRow" /* 7101 */;
import ExperimentalCheckpointIcon from "ExperimentalCheckpointIcon" /* 13552 */;
import openCheckpoint from "openCheckpoint" /* 13570 */;
import CheckpointStore from "CheckpointStore" /* 13571 */;
import size from "module_2" /* 2 */;

function handlePress() {
  const obj = openCheckpoint;
  obj.openCheckpoint("user_profile");
}
function handleLongPress() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(19040, dependencyMap.paths), "CheckpointTestingActionSheet");
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
    const Icon = tmp(7101).TableRow.Icon;
    tmp5Result = tmp5(Icon, obj4);
  }
  let tmp8;
  if (isCheckpointQAEnabled) {
    tmp8 = handleLongPress;
  }
  return <TableRow label={intl.string(_modDef3219["8hclXY"])} subLabel={intl2.string(_modDef3219.BFc4lY)} icon={tmp5Result} onPress={handlePress} onLongPress={tmp8} arrow start end />;
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
