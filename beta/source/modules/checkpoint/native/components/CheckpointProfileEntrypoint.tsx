// Module ID: 14616
// Function ID: 14617
// Name: CheckpointProfileEntrypoint
// Dependencies: [21, 5127, 14617, 2119, 6340, 7045, 1112, 3440, 10121, 12500, 2]
// Exports: default

// Module 14616 (CheckpointProfileEntrypoint)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import CheckpointExperiments from "CheckpointExperiments" /* 6340 */;
import openCheckpoint from "openCheckpoint" /* 12500 */;
import size from "module_2" /* 2 */;

function CheckpointProfileEntrypointRow(source) {
  let fn;
  let intl;
  let intl2;
  source = source.source;
  let obj = source(6340);
  const checkpointQAMode = obj.useCheckpointQAMode("CheckpointProfileEntrypoint");
  let obj2 = {
    label: intl.string(checkpointQAMode(3440)["8hclXY"]),
    subLabel: intl2.string(checkpointQAMode(3440).BFc4lY),
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
  const TableRow = source(7045).TableRow;
  intl = source(1112).intl;
  intl2 = source(1112).intl;
  ({ IconComponent: source(10121).ExperimentalCheckpointIcon });
  const Icon = source(7045).TableRow.Icon;
  fn = undefined;
  const tmp2 = jsx;
  if ("off" !== checkpointQAMode) {
    fn = () => {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { mode: checkpointQAMode };
      obj.openLazy(asyncRequire(14617, dependencyMap.paths), "CheckpointTestingActionSheet", obj2);
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
