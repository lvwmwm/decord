// Module ID: 19252
// Function ID: 19253
// Name: CheckpointTestingActionSheet
// Dependencies: [21, 5374, 7426, 7382, 1113, 3250, 7126, 19253, 7038, 2]
// Exports: default

// Module 19252 (CheckpointTestingActionSheet)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1113 */;
import _modDef3250 from "module_3250" /* 3250 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import TableRowGroup2 from "TableRowGroup" /* 7126 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7382 */;
import ActionSheet2 from "ActionSheet" /* 7426 */;
import CheckpointTestingOptions from "CheckpointTestingOptions" /* 19253 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/testing/native/CheckpointTestingActionSheet.tsx");

export default function CheckpointTestingActionSheet() {
  let intl;
  let prop;
  const ActionSheet = ActionSheet2.ActionSheet;
  ({ title: intl.string(_modDef3250["9dS734"]) });
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl3.intl;
  ({
    hasIcons: false,
    children: prop.map((label) => {
      let intl;
      let stringResult;
      let obj = {
        label: intl.string(label.label),
        subLabel: stringResult,
        onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          label.action();
        }
      };
      const TableRow = label(closure_2[8]).TableRow;
      intl = label(closure_2[4]).intl;
      stringResult = undefined;
      const tmp = closure_3;
      const tmp2 = label;
      const tmp3 = closure_2;
      if (null != label.description) {
        const intl2 = tmp2(tmp3[4]).intl;
        stringResult = intl2.string(label.description);
      }
      return tmp(TableRow, obj, label.id);
    })
  });
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  prop = CheckpointTestingOptions.CHECKPOINT_TESTING_OPTIONS;
  return <ActionSheet header={null}>{null}</ActionSheet>;
};
