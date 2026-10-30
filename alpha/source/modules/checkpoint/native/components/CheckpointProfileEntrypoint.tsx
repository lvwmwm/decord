// Module ID: 18831
// Function ID: 18832
// Name: CheckpointProfileEntrypoint
// Dependencies: [21, 13397, 13384, 6083, 6969, 1114, 3091, 13366, 2]
// Exports: default

// Module 18831 (CheckpointProfileEntrypoint)
import Fragment from "Fragment" /* 21 */;
import _modDef3091 from "module_3091" /* 3091 */;
import CheckpointExperiments from "CheckpointExperiments" /* 6083 */;
import ExperimentalCheckpointIcon from "ExperimentalCheckpointIcon" /* 13366 */;
import openCheckpoint from "openCheckpoint" /* 13384 */;
import CheckpointActionCreators from "CheckpointActionCreators" /* 13397 */;
import size from "module_2" /* 2 */;

function handlePress() {
  const obj = CheckpointActionCreators;
  const checkpointData = obj.fetchCheckpointData();
  const obj2 = openCheckpoint;
  obj2.openCheckpoint("user_profile");
}
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointProfileEntrypoint.tsx");

export default function CheckpointProfileEntrypoint() {
  let tmp3 = null;
  const obj = CheckpointExperiments;
  if (obj.useIsCheckpointEnabled("CheckpointProfileEntrypoint")) {
    const TableRow = tmp(6969).TableRow;
    const intl = tmp(1114).intl;
    const intl2 = tmp(1114).intl;
    ({ IconComponent: ExperimentalCheckpointIcon.ExperimentalCheckpointIcon });
    const Icon = tmp(6969).TableRow.Icon;
    tmp3 = <TableRow label={intl.string(_modDef3091["8hclXY"])} subLabel={intl2.string(_modDef3091.BFc4lY)} icon={null} onPress={handlePress} arrow start end />;
  }
  return tmp3;
};
