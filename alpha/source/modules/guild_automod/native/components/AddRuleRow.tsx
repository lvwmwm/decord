// Module ID: 19955
// Function ID: 19956
// Name: AddRuleRow
// Dependencies: [19, 21, 7116, 11677, 1113, 19942, 2]
// Exports: default

// Module 19955 (AddRuleRow)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import TableRow2 from "TableRow" /* 7116 */;
import CirclePlusIcon from "CirclePlusIcon" /* 11677 */;
import AutomodTriggerConfigs from "AutomodTriggerConfigs" /* 19942 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_automod/native/components/AddRuleRow.tsx");

export default function AddRuleRow(arg0) {
  let obj4;
  let onPress;
  let triggerType;
  ({ triggerType, onPress } = arg0);
  const TableRow = TableRow2.TableRow;
  ({ IconComponent: CirclePlusIcon.CirclePlusIcon });
  const Icon = TableRow2.TableRow.Icon;
  const intl = intl2.intl;
  const format = intl.format;
  const obj3 = { ruleName: obj4.getDefaultRuleName() };
  const dNjRAf = intl2.t.dNjRAf;
  obj4 = AutomodTriggerConfigs.triggerConfigs[triggerType];
  return <TableRow icon={null} label={format(dNjRAf, obj3)} onPress={onPress} />;
};
