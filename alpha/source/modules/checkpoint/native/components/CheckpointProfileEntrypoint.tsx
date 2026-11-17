// Module ID: 19701
// Function ID: 19702
// Name: CheckpointProfileEntrypoint
// Dependencies: [17, 13119, 21, 13124, 5546, 19702, 2121, 6746, 504, 7453, 1113, 3319, 10734, 2]
// Exports: default

// Module 19701 (CheckpointProfileEntrypoint)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import _modDef3319 from "module_3319" /* 3319 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import CheckpointExperiments from "CheckpointExperiments" /* 6746 */;
import openCheckpoint from "openCheckpoint" /* 13124 */;
import CheckpointStore from "CheckpointStore" /* 13119 */;
import size from "module_2" /* 2 */;

function handlePress() {
  const obj = openCheckpoint;
  obj.openCheckpoint("user_profile");
}
function CheckpointProfileEntrypointRow() {
  let checkpointQAMode;
  let isFetching;
  let tmp5Result;
  let obj = checkpointQAMode(6746);
  checkpointQAMode = obj.useCheckpointQAMode("CheckpointProfileEntrypoint");
  let obj2 = checkpointQAMode(504);
  const items = [CheckpointStore];
  const stateFromStores = obj2.useStateFromStores(items, () => isFetching.isFetching);
  const TableRow = checkpointQAMode(7453).TableRow;
  const intl = checkpointQAMode(1113).intl;
  const intl2 = checkpointQAMode(1113).intl;
  if (stateFromStores) {
    tmp5Result = tmp5(ActivityIndicator, {});
  } else {
    const obj4 = { IconComponent: checkpointQAMode(10734).ExperimentalCheckpointIcon };
    const Icon = tmp(7453).TableRow.Icon;
    tmp5Result = tmp5(Icon, obj4);
  }
  let fn;
  if ("off" !== checkpointQAMode) {
    fn = () => {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { mode: checkpointQAMode };
      obj.openLazy(asyncRequire(19702, dependencyMap.paths), "CheckpointTestingActionSheet", obj2);
    };
  }
  return <TableRow label={intl.string(_modDef3319["8hclXY"])} subLabel={intl2.string(_modDef3319.BFc4lY)} icon={tmp5Result} onPress={handlePress} onLongPress={fn} arrow start end />;
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
