// Module ID: 19280
// Function ID: 19281
// Name: CheckpointProfileEntrypoint
// Dependencies: [17, 13681, 21, 13682, 5376, 19281, 2118, 6572, 504, 7041, 1113, 3248, 13661, 2]
// Exports: default

// Module 19280 (CheckpointProfileEntrypoint)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import _modDef3248 from "module_3248" /* 3248 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import CheckpointExperiments from "CheckpointExperiments" /* 6572 */;
import openCheckpoint from "openCheckpoint" /* 13682 */;
import CheckpointStore from "CheckpointStore" /* 13681 */;
import size from "module_2" /* 2 */;

function handlePress() {
  const obj = openCheckpoint;
  obj.openCheckpoint("user_profile");
}
function CheckpointProfileEntrypointRow() {
  let checkpointQAMode;
  let isFetching;
  let tmp5Result;
  let obj = checkpointQAMode(6572);
  checkpointQAMode = obj.useCheckpointQAMode("CheckpointProfileEntrypoint");
  let obj2 = checkpointQAMode(504);
  const items = [CheckpointStore];
  const stateFromStores = obj2.useStateFromStores(items, () => isFetching.isFetching);
  const TableRow = checkpointQAMode(7041).TableRow;
  const intl = checkpointQAMode(1113).intl;
  const intl2 = checkpointQAMode(1113).intl;
  if (stateFromStores) {
    tmp5Result = tmp5(ActivityIndicator, {});
  } else {
    const obj4 = { IconComponent: checkpointQAMode(13661).ExperimentalCheckpointIcon };
    const Icon = tmp(7041).TableRow.Icon;
    tmp5Result = tmp5(Icon, obj4);
  }
  let fn;
  if ("off" !== checkpointQAMode) {
    fn = () => {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { mode: checkpointQAMode };
      obj.openLazy(asyncRequire(19281, dependencyMap.paths), "CheckpointTestingActionSheet", obj2);
    };
  }
  return <TableRow label={intl.string(_modDef3248["8hclXY"])} subLabel={intl2.string(_modDef3248.BFc4lY)} icon={tmp5Result} onPress={handlePress} onLongPress={fn} arrow start end />;
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
