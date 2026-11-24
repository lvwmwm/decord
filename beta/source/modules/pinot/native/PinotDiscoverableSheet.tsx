// Module ID: 7768
// Function ID: 7769
// Name: PinotDiscoverableSheet
// Dependencies: [19, 21, 1112, 3508, 7553, 7515, 7347, 5127, 7349, 7747, 2]
// Exports: default

// Module 7768 (PinotDiscoverableSheet)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import _modDef3508 from "module_3508" /* 3508 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import TableRadioGroup2 from "TableRadioGroup" /* 7347 */;
import TableRadioRow2 from "TableRadioRow" /* 7349 */;
import ActionSheet2 from "ActionSheet" /* 7553 */;
import PinotDiscoverable from "PinotDiscoverable" /* 7747 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/pinot/native/PinotDiscoverableSheet.tsx");

export default function PinotDiscoverableSheet(value) {
  let options;
  ({ options, onChange: require } = value);
  value = value.value;
  let intl = intl2.intl;
  const stringResult = intl.string(_modDef3508["r/o6RM"]);
  const ActionSheet = ActionSheet2.ActionSheet;
  ({
    hasIcons: false,
    defaultValue: value,
    onChange: function handleChange(arg0) {
      require(arg0);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    },
    accessibilityLabel: stringResult,
    children: options.map((value) => {
      const TableRadioRow = TableRadioRow2.TableRadioRow;
      const intl = intl2.intl;
      return <TableRadioRow key={arg0} value={arg0} label={intl.string(PinotDiscoverable.PINOT_DISCOVERABLE_OPTION_LABELS[arg0])} />;
    })
  });
  const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
  return <ActionSheet startExpanded header={null}>{null}</ActionSheet>;
};
