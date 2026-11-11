// Module ID: 19468
// Function ID: 19469
// Name: CheckpointTestingActionSheet
// Dependencies: [21, 5489, 19469, 7885, 7847, 1113, 3271, 7680, 7379, 2]
// Exports: default

// Module 19468 (CheckpointTestingActionSheet)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef3271 from "module_3271" /* 3271 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import TableRowGroup2 from "TableRowGroup" /* 7680 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7847 */;
import ActionSheet2 from "ActionSheet" /* 7885 */;
import CheckpointTestingOptions from "CheckpointTestingOptions" /* 19469 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/testing/native/CheckpointTestingActionSheet.tsx");

export default function CheckpointTestingActionSheet(mode) {
  let intl;
  mode = mode.mode;
  let obj = CheckpointTestingOptions;
  const checkpointTestingOptions = obj.getCheckpointTestingOptions(mode);
  const ActionSheet = ActionSheet2.ActionSheet;
  ({ title: intl.string(_modDef3271["9dS734"]) });
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
