// Module ID: 20016
// Function ID: 20017
// Name: SelectApplicationActionSheet
// Dependencies: [19, 21, 1113, 7504, 7460, 7202, 5384, 7205, 9193, 2]
// Exports: default

// Module 20016 (SelectApplicationActionSheet)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import TableRadioGroup2 from "TableRadioGroup" /* 7202 */;
import TableRadioRow2 from "TableRadioRow" /* 7205 */;
import ActionSheet2 from "ActionSheet" /* 7504 */;
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
