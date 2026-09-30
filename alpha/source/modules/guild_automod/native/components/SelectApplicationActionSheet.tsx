// Module ID: 17556
// Function ID: 17557
// Name: SelectApplicationActionSheet
// Dependencies: [19, 21, 1115, 6814, 6766, 6193, 4830, 6196, 9222, 2]
// Exports: default

// Module 17556 (SelectApplicationActionSheet)
import util from "util" /* 1115 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import TableRadioGroup from "TableRadioGroup" /* 6193 */;
import TableRadioRow from "TableRadioRow" /* 6196 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6766 */;
import ActionSheet from "ActionSheet" /* 6814 */;
import TableRowApplicationIconDefault from "TableRowApplicationIcon" /* 9222 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/SelectApplicationActionSheet.tsx");

export default function SelectApplicationActionSheet(arg0) {
  ({ applications, selectedApplicationId, onSelectApplication: require } = arg0);
  const intl = util.intl;
  const stringResult = intl.string(util.t.FKSiso);
  let obj = { header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: stringResult }), children: null };
  const obj2 = {
    hasIcons: true,
    accessibilityLabel: stringResult,
    defaultValue: selectedApplicationId,
    onChange(arg0) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      require(arg0);
    },
    children: applications.map((application) => {
      const obj = { value: application.id, label: application.name, icon: jsx(TableRowApplicationIconDefault, { application }) };
      return jsx(TableRadioRow.TableRadioRow, { value: application.id, label: application.name, icon: jsx(TableRowApplicationIconDefault, { application }) }, application.id);
    })
  };
  obj.children = jsx(TableRadioGroup.TableRadioGroup, {
    hasIcons: true,
    accessibilityLabel: stringResult,
    defaultValue: selectedApplicationId,
    onChange(arg0) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      require(arg0);
    },
    children: applications.map((application) => {
      const obj = { value: application.id, label: application.name, icon: jsx(TableRowApplicationIconDefault, { application }) };
      return jsx(TableRadioRow.TableRadioRow, { value: application.id, label: application.name, icon: jsx(TableRowApplicationIconDefault, { application }) }, application.id);
    })
  });
  return jsx(ActionSheet.ActionSheet, { header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: stringResult }), children: null });
};
