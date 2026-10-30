// Module ID: 19636
// Function ID: 19637
// Name: SelectApplicationActionSheet
// Dependencies: [19, 21, 1114, 7360, 7315, 7052, 5253, 7055, 9030, 2]
// Exports: default

// Module 19636 (SelectApplicationActionSheet)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1114 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import TableRadioGroup2 from "TableRadioGroup" /* 7052 */;
import TableRadioRow2 from "TableRadioRow" /* 7055 */;
import ActionSheet2 from "ActionSheet" /* 7360 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_automod/native/components/SelectApplicationActionSheet.tsx");

export default function SelectApplicationActionSheet(arg0) {
  let TableRadioGroup;
  let applications;
  let obj2;
  let selectedApplicationId;
  ({ applications, selectedApplicationId, onSelectApplication: require } = arg0);
  const intl = intl2.intl;
  const stringResult = intl.string(intl2.t.FKSiso);
  let obj = { header: null, children: tmp2(TableRadioGroup, obj2) };
  const ActionSheet = ActionSheet2.ActionSheet;
  obj2 = {
    hasIcons: true,
    accessibilityLabel: stringResult,
    defaultValue: selectedApplicationId,
    onChange: function handleChange(arg0) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      require(arg0);
    },
    children: applications.map((application) => {
      const TableRadioRow = TableRadioRow2.TableRadioRow;
      return <TableRadioRow key={arg0.id} value={arg0.id} label={arg0.name} icon={null} />;
    })
  };
  TableRadioGroup = TableRadioGroup2.TableRadioGroup;
  return jsx(ActionSheet, obj);
};
