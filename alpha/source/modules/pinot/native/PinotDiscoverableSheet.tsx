// Module ID: 8176
// Function ID: 8177
// Name: PinotDiscoverableSheet
// Dependencies: [19, 21, 1113, 3387, 7961, 7923, 7755, 5546, 7757, 8155, 2]
// Exports: default

// Module 8176 (PinotDiscoverableSheet)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef3387 from "module_3387" /* 3387 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import TableRadioGroup2 from "TableRadioGroup" /* 7755 */;
import TableRadioRow2 from "TableRadioRow" /* 7757 */;
import ActionSheet2 from "ActionSheet" /* 7961 */;
import PinotDiscoverable from "PinotDiscoverable" /* 8155 */;
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
  const stringResult = intl.string(_modDef3387["r/o6RM"]);
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
