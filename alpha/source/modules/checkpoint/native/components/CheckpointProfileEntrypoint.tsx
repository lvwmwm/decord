// Module ID: 19654
// Function ID: 19655
// Name: CheckpointProfileEntrypoint
// Dependencies: [17, 14253, 21, 14258, 5552, 19655, 2121, 6748, 504, 7443, 1113, 3317, 15190, 2]
// Exports: default

// Module 19654 (CheckpointProfileEntrypoint)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import _modDef3317 from "module_3317" /* 3317 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import CheckpointExperiments from "CheckpointExperiments" /* 6748 */;
import openCheckpoint from "openCheckpoint" /* 14258 */;
import CheckpointStore from "CheckpointStore" /* 14253 */;
import size from "module_2" /* 2 */;

function handlePress() {
  const obj = openCheckpoint;
  obj.openCheckpoint("user_profile");
}
function CheckpointProfileEntrypointRow() {
  let checkpointQAMode;
  let isFetching;
  let tmp5Result;
  let obj = checkpointQAMode(6748);
  checkpointQAMode = obj.useCheckpointQAMode("CheckpointProfileEntrypoint");
  let obj2 = checkpointQAMode(504);
  const items = [CheckpointStore];
  const stateFromStores = obj2.useStateFromStores(items, () => isFetching.isFetching);
  const TableRow = checkpointQAMode(7443).TableRow;
  const intl = checkpointQAMode(1113).intl;
  const intl2 = checkpointQAMode(1113).intl;
  if (stateFromStores) {
    tmp5Result = tmp5(ActivityIndicator, {});
  } else {
    const obj4 = { IconComponent: checkpointQAMode(15190).ExperimentalCheckpointIcon };
    const Icon = tmp(7443).TableRow.Icon;
    tmp5Result = tmp5(Icon, obj4);
  }
  let fn;
  if ("off" !== checkpointQAMode) {
    fn = () => {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { mode: checkpointQAMode };
      obj.openLazy(asyncRequire(19655, dependencyMap.paths), "CheckpointTestingActionSheet", obj2);
    };
  }
  return <TableRow label={intl.string(_modDef3317["8hclXY"])} subLabel={intl2.string(_modDef3317.BFc4lY)} icon={tmp5Result} onPress={handlePress} onLongPress={fn} arrow start end />;
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
