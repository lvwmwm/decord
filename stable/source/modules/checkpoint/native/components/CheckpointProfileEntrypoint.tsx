// Module ID: 18876
// Function ID: 18877
// Name: CheckpointProfileEntrypoint
// Dependencies: [21, 13450, 13434, 5258, 18877, 1994, 6088, 6975, 1113, 3092, 13416, 2]
// Exports: default

// Module 18876 (CheckpointProfileEntrypoint)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1113 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import _modDef3092 from "module_3092" /* 3092 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import CheckpointExperiments from "CheckpointExperiments" /* 6088 */;
import TableRow2 from "TableRow" /* 6975 */;
import ExperimentalCheckpointIcon from "ExperimentalCheckpointIcon" /* 13416 */;
import openCheckpoint from "openCheckpoint" /* 13434 */;
import CheckpointActionCreators from "CheckpointActionCreators" /* 13450 */;
import size from "module_2" /* 2 */;

function handlePress() {
  const obj = CheckpointActionCreators;
  const checkpointData = obj.fetchCheckpointData();
  const obj2 = openCheckpoint;
  obj2.openCheckpoint("user_profile");
}
function handleLongPress() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(18877, dependencyMap.paths), "CheckpointTestingActionSheet");
}
function CheckpointProfileEntrypointRow() {
  let intl;
  let intl2;
  let tmp3;
  const obj = CheckpointExperiments;
  const isCheckpointQAEnabled = obj.useIsCheckpointQAEnabled("CheckpointProfileEntrypoint");
  const obj2 = { label: intl.string(_modDef3092["8hclXY"]), subLabel: intl2.string(_modDef3092.BFc4lY), icon: null, onPress: handlePress, onLongPress: tmp3, arrow: true, start: true, end: true };
  const TableRow = TableRow2.TableRow;
  intl = intl3.intl;
  intl2 = intl3.intl;
  ({ IconComponent: ExperimentalCheckpointIcon.ExperimentalCheckpointIcon });
  const Icon = TableRow2.TableRow.Icon;
  tmp3 = undefined;
  const tmp2 = jsx;
  if (isCheckpointQAEnabled) {
    tmp3 = handleLongPress;
  }
  return tmp2(TableRow, obj2);
}
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
