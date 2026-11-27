// Module ID: 8549
// Function ID: 8550
// Name: PinotDiscoverableSheet
// Dependencies: [19, 21, 1112, 3563, 7546, 7507, 7251, 5257, 7253, 8531, 2]
// Exports: default

// Module 8549 (PinotDiscoverableSheet)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import _modDef3563 from "module_3563" /* 3563 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import TableRadioGroup2 from "TableRadioGroup" /* 7251 */;
import TableRadioRow2 from "TableRadioRow" /* 7253 */;
import ActionSheet2 from "ActionSheet" /* 7546 */;
import PinotDiscoverable from "PinotDiscoverable" /* 8531 */;
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
  const stringResult = intl.string(_modDef3563["r/o6RM"]);
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
