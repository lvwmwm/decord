// Module ID: 14873
// Function ID: 14874
// Name: CheckpointProfileEntrypoint
// Dependencies: [17, 12407, 21, 5131, 14874, 2119, 6643, 504, 6018, 1112, 3442, 13943, 12412, 2]
// Exports: default

// Module 14873 (CheckpointProfileEntrypoint)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import CheckpointExperiments from "CheckpointExperiments" /* 6643 */;
import openCheckpoint from "openCheckpoint" /* 12412 */;
import CheckpointStore from "CheckpointStore" /* 12407 */;
import size from "module_2" /* 2 */;

function CheckpointProfileEntrypointRow(source) {
  let isFetching;
  let tmp5Result;
  source = source.source;
  let obj = source(6643);
  const checkpointQAMode = obj.useCheckpointQAMode("CheckpointProfileEntrypoint");
  let obj2 = source(504);
  const items = [CheckpointStore];
  const stateFromStores = obj2.useStateFromStores(items, () => isFetching.isFetching);
  const TableRow = source(6018).TableRow;
  const intl = source(1112).intl;
  const intl2 = source(1112).intl;
  if (stateFromStores) {
    tmp5Result = tmp5(ActivityIndicator, {});
  } else {
    const obj4 = { IconComponent: source(13943).ExperimentalCheckpointIcon };
    const Icon = tmp(6018).TableRow.Icon;
    tmp5Result = tmp5(Icon, obj4);
  }
  let fn;
  if ("off" !== checkpointQAMode) {
    fn = () => {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { mode: checkpointQAMode };
      obj.openLazy(asyncRequire(14874, dependencyMap.paths), "CheckpointTestingActionSheet", obj2);
    };
  }
  return <TableRow label={intl.string(checkpointQAMode(3442)["8hclXY"])} subLabel={intl2.string(checkpointQAMode(3442).BFc4lY)} icon={tmp5Result} onPress={function onPress() {
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
