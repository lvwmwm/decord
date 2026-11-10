// Module ID: 19281
// Function ID: 19282
// Name: CheckpointTestingActionSheet
// Dependencies: [21, 5376, 19282, 7429, 7385, 1113, 3250, 7129, 7041, 2]
// Exports: default

// Module 19281 (CheckpointTestingActionSheet)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef3250 from "module_3250" /* 3250 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import TableRowGroup2 from "TableRowGroup" /* 7129 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7385 */;
import ActionSheet2 from "ActionSheet" /* 7429 */;
import CheckpointTestingOptions from "CheckpointTestingOptions" /* 19282 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/testing/native/CheckpointTestingActionSheet.tsx");

export default function CheckpointTestingActionSheet(mode) {
  let intl;
  mode = mode.mode;
  let obj = CheckpointTestingOptions;
  const checkpointTestingOptions = obj.getCheckpointTestingOptions(mode);
  const ActionSheet = ActionSheet2.ActionSheet;
  ({ title: intl.string(_modDef3250["9dS734"]) });
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl2.intl;
  ({
    hasIcons: false,
    children: checkpointTestingOptions.map((label) => {
      let intl;
      let obj = {
        label: intl.string(label.label),
        onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          label.action();
        }
      };
      const TableRow = label(closure_2[8]).TableRow;
      intl = label(closure_2[5]).intl;
      return closure_3(TableRow, obj, label.id);
    })
  });
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  return <ActionSheet header={null}>{null}</ActionSheet>;
};
