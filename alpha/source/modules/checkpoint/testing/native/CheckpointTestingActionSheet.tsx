// Module ID: 14996
// Function ID: 14997
// Name: CheckpointTestingActionSheet
// Dependencies: [14997, 21, 5226, 1112, 3496, 6109, 7518, 14999, 7515, 7476, 6113, 2]
// Exports: default

// Module 14996 (CheckpointTestingActionSheet)
import intl4 from "intl" /* 1112 */;
import _modDef3496 from "module_3496" /* 3496 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import TableRowGroup2 from "TableRowGroup" /* 6109 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7476 */;
import ActionSheet2 from "ActionSheet" /* 7515 */;
import TableSwitchRow from "TableSwitchRow" /* 7518 */;
import CheckpointMitigationOverrideStore from "CheckpointMitigationOverrideStore" /* 14997 */;
import CheckpointTestingOptions from "CheckpointTestingOptions" /* 14999 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
function handleNoCharacterChange(isNoCharacter) {
  const obj = { isNoCharacter };
  closure_3.setState(obj);
}
function handleCompactAssetsChange(isCompactAssets) {
  const obj = { isCompactAssets };
  closure_3.setState(obj);
}
function CheckpointMitigationOverrides() {
  let items;
  const tmp = closure_3((isNoCharacter) => isNoCharacter.isNoCharacter);
  const tmp2 = closure_3((isCompactAssets) => isCompactAssets.isCompactAssets);
  const intl = intl4.intl;
  const stringResult = intl.string(_modDef3496.kXGgZf);
  const intl2 = intl4.intl;
  const stringResult1 = intl2.string(_modDef3496.FbmMyu);
  const intl3 = intl4.intl;
  const obj = { title: stringResult, hasIcons: false, children: items };
  const stringResult2 = intl3.string(_modDef3496.j5X4PU);
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  items = [, ];
  const obj2 = { label: stringResult1, value: tmp, onValueChange: handleNoCharacterChange };
  items[0] = React3(TableSwitchRow.TableSwitchRow, obj2);
  const obj3 = { label: stringResult2, value: tmp2, onValueChange: handleCompactAssetsChange };
  items[1] = React3(TableSwitchRow.TableSwitchRow, obj3);
  return hasOwnProperty(TableRowGroup, obj);
}
let closure_3 = CheckpointMitigationOverrideStore.useCheckpointMitigationOverrideStore;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const result = size.fileFinishedImporting("modules/checkpoint/testing/native/CheckpointTestingActionSheet.tsx");

export default function CheckpointTestingActionSheet(mode) {
  let BottomSheetTitleHeader;
  let intl2;
  let items;
  let obj3;
  mode = mode.mode;
  let obj = CheckpointTestingOptions;
  const checkpointTestingOptions = obj.getCheckpointTestingOptions(mode);
  let intl = intl4.intl;
  const obj2 = { header: React3(BottomSheetTitleHeader, obj3), children: items };
  const stringResult = intl.string(_modDef3496.r0B3ck);
  const ActionSheet = ActionSheet2.ActionSheet;
  obj3 = { title: intl2.string(_modDef3496["9dS734"]) };
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl2 = intl4.intl;
  let tmp5Result = "all" === mode;
  const tmp4 = hasOwnProperty;
  if (tmp5Result) {
    tmp5Result = tmp5(CheckpointMitigationOverrides, {});
  }
  items = [tmp5Result, ];
  const obj4 = {
    title: stringResult,
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
      const TableRow = label(closure_2[10]).TableRow;
      intl = label(closure_2[3]).intl;
      return closure_4(TableRow, obj, label.id);
    })
  };
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  items[1] = React3(TableRowGroup, obj4);
  return tmp4(ActionSheet, obj2);
};
