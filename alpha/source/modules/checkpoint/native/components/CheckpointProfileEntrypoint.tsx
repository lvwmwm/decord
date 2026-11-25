// Module ID: 14995
// Function ID: 14996
// Name: CheckpointProfileEntrypoint
// Dependencies: [17, 12571, 21, 5226, 14996, 2119, 6738, 504, 6113, 1112, 3494, 14066, 12576, 2]
// Exports: default

// Module 14995 (CheckpointProfileEntrypoint)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import CheckpointExperiments from "CheckpointExperiments" /* 6738 */;
import openCheckpoint from "openCheckpoint" /* 12576 */;
import CheckpointStore from "CheckpointStore" /* 12571 */;
import size from "module_2" /* 2 */;

function CheckpointProfileEntrypointRow(source) {
  let isFetching;
  let tmp5Result;
  source = source.source;
  let obj = source(6738);
  const checkpointQAMode = obj.useCheckpointQAMode("CheckpointProfileEntrypoint");
  let obj2 = source(504);
  const items = [CheckpointStore];
  const stateFromStores = obj2.useStateFromStores(items, () => isFetching.isFetching);
  const TableRow = source(6113).TableRow;
  const intl = source(1112).intl;
  const intl2 = source(1112).intl;
  if (stateFromStores) {
    tmp5Result = tmp5(ActivityIndicator, {});
  } else {
    const obj4 = { IconComponent: source(14066).ExperimentalCheckpointIcon };
    const Icon = tmp(6113).TableRow.Icon;
    tmp5Result = tmp5(Icon, obj4);
  }
  let fn;
  if ("off" !== checkpointQAMode) {
    fn = () => {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { mode: checkpointQAMode };
      obj.openLazy(asyncRequire(14996, dependencyMap.paths), "CheckpointTestingActionSheet", obj2);
    };
  }
  return <TableRow label={intl.string(checkpointQAMode(3494)["8hclXY"])} subLabel={intl2.string(checkpointQAMode(3494).BFc4lY)} icon={tmp5Result} onPress={function onPress() {
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
