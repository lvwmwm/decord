// Module ID: 15432
// Function ID: 15433
// Name: QuestBottomSheetTaskSelect
// Dependencies: [19, 5693, 21, 5936, 5854, 9193, 1115, 9380, 2]
// Exports: default

// Module 15432 (QuestBottomSheetTaskSelect)
import noop from "module_19" /* 19 */;

const require = fn;
const QuestTaskPlatform = fn(5693).QuestTaskPlatform;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetTaskSelect.tsx");

export default function QuestBottomSheetTaskSelect(onTaskSelect) {
  onTaskSelect = onTaskSelect.onTaskSelect;
  const obj = { hasIcons: true, children: null };
  const obj2 = { arrow: true, icon: closure_3(onTaskSelect(9193).ScreenIcon, {}), label: null, onPress: null };
  const intl = onTaskSelect(1115).intl;
  obj2.label = intl.string(onTaskSelect(1115).t["QXc01+"]);
  obj2.onPress = function onPress() {
    let tmpResult;
    if (onTaskSelect != null) {
      tmpResult = tmp(QuestTaskPlatform.DESKTOP);
    }
    return tmpResult;
  };
  const items = [closure_3(onTaskSelect(5854).TableRow, obj2), ];
  const obj3 = { arrow: true, icon: closure_3(onTaskSelect(9380).GameControllerIcon, {}), label: null, onPress: null };
  const intl2 = onTaskSelect(1115).intl;
  obj3.label = intl2.string(onTaskSelect(1115).t["8lAfuB"]);
  obj3.onPress = function onPress() {
    let tmpResult;
    if (onTaskSelect != null) {
      tmpResult = tmp(QuestTaskPlatform.CONSOLE);
    }
    return tmpResult;
  };
  items[1] = closure_3(onTaskSelect(5854).TableRow, obj3);
  obj.children = items;
  return closure_4(onTaskSelect(5936).TableRowGroup, obj);
};
