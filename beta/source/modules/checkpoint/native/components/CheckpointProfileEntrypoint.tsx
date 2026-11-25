// Module ID: 14613
// Function ID: 14614
// Name: CheckpointProfileEntrypoint
// Dependencies: [17, 12495, 21, 5127, 14614, 2119, 6340, 504, 7045, 1112, 3440, 10121, 12500, 2]
// Exports: default

// Module 14613 (CheckpointProfileEntrypoint)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import CheckpointExperiments from "CheckpointExperiments" /* 6340 */;
import openCheckpoint from "openCheckpoint" /* 12500 */;
import CheckpointStore from "CheckpointStore" /* 12495 */;
import size from "module_2" /* 2 */;

function CheckpointProfileEntrypointRow(source) {
  let isFetching;
  let tmp5Result;
  source = source.source;
  let obj = source(6340);
  const checkpointQAMode = obj.useCheckpointQAMode("CheckpointProfileEntrypoint");
  let obj2 = source(504);
  const items = [CheckpointStore];
  const stateFromStores = obj2.useStateFromStores(items, () => isFetching.isFetching);
  const TableRow = source(7045).TableRow;
  const intl = source(1112).intl;
  const intl2 = source(1112).intl;
  if (stateFromStores) {
    tmp5Result = tmp5(ActivityIndicator, {});
  } else {
    const obj4 = { IconComponent: source(10121).ExperimentalCheckpointIcon };
    const Icon = tmp(7045).TableRow.Icon;
    tmp5Result = tmp5(Icon, obj4);
  }
  let fn;
  if ("off" !== checkpointQAMode) {
    fn = () => {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { mode: checkpointQAMode };
      obj.openLazy(asyncRequire(14614, dependencyMap.paths), "CheckpointTestingActionSheet", obj2);
    };
  }
  return <TableRow label={intl.string(checkpointQAMode(3440)["8hclXY"])} subLabel={intl2.string(checkpointQAMode(3440).BFc4lY)} icon={tmp5Result} onPress={function onPress() {
    const obj = openCheckpoint;
    return obj.openCheckpoint(source);
  }} onLongPress={fn} arrow start end />;
}
const ActivityIndicator = react_native.ActivityIndicator;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointProfileEntrypoint.tsx");

export default function CheckpointProfileEntrypoint(source) {
  source = source.source;
  let tmp = null;
  const obj = CheckpointExperiments;
  if (obj.useIsCheckpointEnabled("CheckpointProfileEntrypoint")) {
    tmp = <CheckpointProfileEntrypointRow source={source} />;
  }
  return tmp;
};
