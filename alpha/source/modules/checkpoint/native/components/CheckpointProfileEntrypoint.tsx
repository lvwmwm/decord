// Module ID: 19467
// Function ID: 19468
// Name: CheckpointProfileEntrypoint
// Dependencies: [17, 14150, 21, 14152, 5489, 19468, 2118, 6685, 504, 7379, 1113, 3269, 15079, 2]
// Exports: default

// Module 19467 (CheckpointProfileEntrypoint)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import _modDef3269 from "module_3269" /* 3269 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import CheckpointExperiments from "CheckpointExperiments" /* 6685 */;
import openCheckpoint from "openCheckpoint" /* 14152 */;
import CheckpointStore from "CheckpointStore" /* 14150 */;
import size from "module_2" /* 2 */;

function handlePress() {
  const obj = openCheckpoint;
  obj.openCheckpoint("user_profile");
}
function CheckpointProfileEntrypointRow() {
  let checkpointQAMode;
  let isFetching;
  let tmp5Result;
  let obj = checkpointQAMode(6685);
  checkpointQAMode = obj.useCheckpointQAMode("CheckpointProfileEntrypoint");
  let obj2 = checkpointQAMode(504);
  const items = [CheckpointStore];
  const stateFromStores = obj2.useStateFromStores(items, () => isFetching.isFetching);
  const TableRow = checkpointQAMode(7379).TableRow;
  const intl = checkpointQAMode(1113).intl;
  const intl2 = checkpointQAMode(1113).intl;
  if (stateFromStores) {
    tmp5Result = tmp5(ActivityIndicator, {});
  } else {
    const obj4 = { IconComponent: checkpointQAMode(15079).ExperimentalCheckpointIcon };
    const Icon = tmp(7379).TableRow.Icon;
    tmp5Result = tmp5(Icon, obj4);
  }
  let fn;
  if ("off" !== checkpointQAMode) {
    fn = () => {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { mode: checkpointQAMode };
      obj.openLazy(asyncRequire(19468, dependencyMap.paths), "CheckpointTestingActionSheet", obj2);
    };
  }
  return <TableRow label={intl.string(_modDef3269["8hclXY"])} subLabel={intl2.string(_modDef3269.BFc4lY)} icon={tmp5Result} onPress={handlePress} onLongPress={fn} arrow start end />;
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
