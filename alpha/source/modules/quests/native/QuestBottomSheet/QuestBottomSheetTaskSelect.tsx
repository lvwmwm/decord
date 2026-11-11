// Module ID: 17651
// Function ID: 17652
// Name: QuestBottomSheetTaskSelect
// Dependencies: [19, 5275, 21, 7680, 7379, 10400, 1113, 7374, 2]
// Exports: default

// Module 17651 (QuestBottomSheetTaskSelect)
import QuestConstants from "QuestConstants" /* 5275 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
const QuestTaskPlatform = QuestConstants.QuestTaskPlatform;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetTaskSelect.tsx");

export default function QuestBottomSheetTaskSelect(onTaskSelect) {
  let intl;
  let intl2;
  let items;
  onTaskSelect = onTaskSelect.onTaskSelect;
  const obj = { hasIcons: true, children: items };
  const TableRowGroup = onTaskSelect(7680).TableRowGroup;
  const obj2 = {
    arrow: true,
    icon: closure_3(onTaskSelect(10400).ScreenIcon, {}),
    label: intl.string(onTaskSelect(1113).t["QXc01+"]),
    onPress() {
      let tmpResult;
      if (onTaskSelect != null) {
        tmpResult = tmp(QuestTaskPlatform.DESKTOP);
      }
      return tmpResult;
    }
  };
  const TableRow = onTaskSelect(7379).TableRow;
  intl = onTaskSelect(1113).intl;
  items = [closure_3(TableRow, obj2), ];
  const obj3 = {
    arrow: true,
    icon: closure_3(onTaskSelect(7374).GameControllerIcon, {}),
    label: intl2.string(onTaskSelect(1113).t["8lAfuB"]),
    onPress() {
      let tmpResult;
      if (onTaskSelect != null) {
        tmpResult = tmp(QuestTaskPlatform.CONSOLE);
      }
      return tmpResult;
    }
  };
  const TableRow2 = onTaskSelect(7379).TableRow;
  intl2 = onTaskSelect(1113).intl;
  items[1] = closure_3(TableRow2, obj3);
  return closure_4(TableRowGroup, obj);
};
