// Module ID: 15052
// Function ID: 15053
// Name: CheckpointProfileEntrypoint
// Dependencies: [21, 5257, 15053, 2120, 6769, 6144, 1112, 3495, 14125, 12633, 2]
// Exports: default

// Module 15052 (CheckpointProfileEntrypoint)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import CheckpointExperiments from "CheckpointExperiments" /* 6769 */;
import openCheckpoint from "openCheckpoint" /* 12633 */;
import size from "module_2" /* 2 */;

function CheckpointProfileEntrypointRow(source) {
  let fn;
  let intl;
  let intl2;
  source = source.source;
  let obj = source(6769);
  const checkpointQAMode = obj.useCheckpointQAMode("CheckpointProfileEntrypoint");
  let obj2 = {
    label: intl.string(checkpointQAMode(3495)["8hclXY"]),
    subLabel: intl2.string(checkpointQAMode(3495).BFc4lY),
    icon: null,
    onPress() {
      const obj = openCheckpoint;
      return obj.openCheckpoint(source);
    },
    onLongPress: fn,
    arrow: true,
    start: true,
    end: true
  };
  const TableRow = source(6144).TableRow;
  intl = source(1112).intl;
  intl2 = source(1112).intl;
  ({ IconComponent: source(14125).ExperimentalCheckpointIcon });
  const Icon = source(6144).TableRow.Icon;
  fn = undefined;
  const tmp2 = jsx;
  if ("off" !== checkpointQAMode) {
    fn = () => {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { mode: checkpointQAMode };
      obj.openLazy(asyncRequire(15053, dependencyMap.paths), "CheckpointTestingActionSheet", obj2);
    };
  }
  return tmp2(TableRow, obj2);
}
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
