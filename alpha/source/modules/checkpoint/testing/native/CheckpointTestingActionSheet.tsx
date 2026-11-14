// Module ID: 19655
// Function ID: 19656
// Name: CheckpointTestingActionSheet
// Dependencies: [19656, 21, 5552, 1113, 3319, 7746, 7954, 19657, 7951, 7913, 7443, 2]
// Exports: default

// Module 19655 (CheckpointTestingActionSheet)
import intl4 from "intl" /* 1113 */;
import _modDef3319 from "module_3319" /* 3319 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import TableRowGroup2 from "TableRowGroup" /* 7746 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7913 */;
import ActionSheet2 from "ActionSheet" /* 7951 */;
import TableSwitchRow from "TableSwitchRow" /* 7954 */;
import CheckpointMitigationOverrideStore from "CheckpointMitigationOverrideStore" /* 19656 */;
import CheckpointTestingOptions from "CheckpointTestingOptions" /* 19657 */;
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
  const stringResult = intl.string(_modDef3319.kXGgZf);
  const intl2 = intl4.intl;
  const stringResult1 = intl2.string(_modDef3319.FbmMyu);
  const intl3 = intl4.intl;
  const obj = { title: stringResult, hasIcons: false, children: items };
  const stringResult2 = intl3.string(_modDef3319.j5X4PU);
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
  const stringResult = intl.string(_modDef3319.r0B3ck);
  const ActionSheet = ActionSheet2.ActionSheet;
  obj3 = { title: intl2.string(_modDef3319["9dS734"]) };
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
