// Module ID: 19179
// Function ID: 19180
// Name: CheckpointProfileEntrypoint
// Dependencies: [17, 13643, 21, 13644, 5404, 19180, 2118, 6595, 504, 7063, 1113, 3248, 13623, 2]
// Exports: default

// Module 19179 (CheckpointProfileEntrypoint)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import intl3 from "intl" /* 1113 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import _modDef3248 from "module_3248" /* 3248 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import CheckpointExperiments from "CheckpointExperiments" /* 6595 */;
import TableRow2 from "TableRow" /* 7063 */;
import ExperimentalCheckpointIcon from "ExperimentalCheckpointIcon" /* 13623 */;
import openCheckpoint from "openCheckpoint" /* 13644 */;
import CheckpointStore from "CheckpointStore" /* 13643 */;
import size from "module_2" /* 2 */;

function handlePress() {
  const obj = openCheckpoint;
  obj.openCheckpoint("user_profile");
}
function handleLongPress() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(19180, dependencyMap.paths), "CheckpointTestingActionSheet");
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
    const Icon = tmp(7063).TableRow.Icon;
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
