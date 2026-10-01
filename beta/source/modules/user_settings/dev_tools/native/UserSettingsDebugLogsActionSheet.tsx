// Module ID: 15118
// Function ID: 15119
// Name: UserSettingsDebugLogsActionSheet
// Dependencies: [19, 21, 6618, 6570, 1115, 5999, 5917, 5997, 6000, 1177, 4800, 2]
// Exports: openUserSettingsDebugLogsFiltersActionSheet

// Module 15118 (UserSettingsDebugLogsActionSheet)
import intl6 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import TableRow2 from "TableRow" /* 5917 */;
import TableRadioGroup2 from "TableRadioGroup" /* 5997 */;
import TableRowGroup2 from "TableRowGroup" /* 5999 */;
import TableRadioRow3 from "TableRadioRow" /* 6000 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6570 */;
import ActionSheet2 from "ActionSheet" /* 6618 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
function UserSettingsDebugLogsFiltersActionSheet(arg0) {
  let BottomSheetTitleHeader;
  let TableRow;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items;
  let items1;
  let obj2;
  let obj4;
  let onRefresh;
  let onSortOrderChanged;
  let sortOrder;
  ({ sortOrder, onSortOrderChanged, onRefresh } = arg0);
  const obj = { header: _false(BottomSheetTitleHeader, obj2), children: items };
  const ActionSheet = ActionSheet2.ActionSheet;
  obj2 = { title: intl.string(intl6.t["+B9e11"]) };
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl6.intl;
  const obj3 = { hasIcons: false, children: _false(TableRow, obj4) };
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  obj4 = { label: intl2.string(intl6.t.wzzjk9), onPress: onRefresh };
  TableRow = TableRow2.TableRow;
  intl2 = intl6.intl;
  items = [_false(TableRowGroup, obj3), , ];
  const obj5 = { title: intl3.string(intl6.t.gePre2), defaultValue: sortOrder, onChange: onSortOrderChanged, hasIcons: false, children: items1 };
  const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
  intl3 = intl6.intl;
  const obj6 = { label: intl4.string(intl6.t.eoXe0r), value: "newest" };
  const TableRadioRow = TableRadioRow3.TableRadioRow;
  intl4 = intl6.intl;
  items1 = [_false(TableRadioRow, obj6), ];
  const obj7 = { label: intl5.string(intl6.t.mmeWUF), value: "oldest" };
  const TableRadioRow2 = TableRadioRow3.TableRadioRow;
  intl5 = intl6.intl;
  items1[1] = _false(TableRadioRow2, obj7);
  items[1] = React3(TableRadioGroup, obj5);
  items[2] = _false(native.Spacer, { size: 0 });
  return React3(ActionSheet, obj);
}
({ jsx: c3, jsxs: closure_4 } = Fragment);
const result = size.fileFinishedImporting("modules/user_settings/dev_tools/native/UserSettingsDebugLogsActionSheet.tsx");

export const openUserSettingsDebugLogsFiltersActionSheet = function openUserSettingsDebugLogsFiltersActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { default: UserSettingsDebugLogsFiltersActionSheet };
  obj.openLazy(Promise.resolve(obj2), "UserSettingsDebugLogsFiltersActionSheet", arg0);
};
