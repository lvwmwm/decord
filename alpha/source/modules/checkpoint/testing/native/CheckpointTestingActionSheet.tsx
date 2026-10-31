// Module ID: 18875
// Function ID: 18876
// Name: CheckpointTestingActionSheet
// Dependencies: [21, 5258, 7366, 7321, 1113, 3094, 7060, 18876, 6975, 2]
// Exports: default

// Module 18875 (CheckpointTestingActionSheet)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1113 */;
import _modDef3094 from "module_3094" /* 3094 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import TableRowGroup2 from "TableRowGroup" /* 7060 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7321 */;
import ActionSheet2 from "ActionSheet" /* 7366 */;
import CheckpointTestingOptions from "CheckpointTestingOptions" /* 18876 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/testing/native/CheckpointTestingActionSheet.tsx");

export default function CheckpointTestingActionSheet() {
  let intl;
  let prop;
  const ActionSheet = ActionSheet2.ActionSheet;
  ({ title: intl.string(_modDef3094["9dS734"]) });
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
