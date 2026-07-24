// Module ID: 14107
// Function ID: 108432
// Name: QuestBottomSheetTaskSelect
// Dependencies: [31, 4976, 33, 5501, 5165, 11882, 1212, 8979, 2]
// Exports: default

// Module 14107 (QuestBottomSheetTaskSelect)
import "result";
import { QuestTaskPlatform } from "QuestsExperimentLocations";
import jsxProd from "jsxProd";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetTaskSelect.tsx");

export default function QuestBottomSheetTaskSelect(onTaskSelect) {
  onTaskSelect = onTaskSelect.onTaskSelect;
  let obj = { hasIcons: true };
  obj = { arrow: true, icon: callback(onTaskSelect(11882).ScreenIcon, {}) };
  const intl = onTaskSelect(1212).intl;
  obj.label = intl.string(onTaskSelect(1212).t["QXc01+"]);
  obj.onPress = function onPress() {
    let tmp;
    if (null != onTaskSelect) {
      tmp = onTaskSelect(outer1_2.DESKTOP);
    }
    return tmp;
  };
  const items = [callback(onTaskSelect(5165).TableRow, obj), ];
  obj = { arrow: true, icon: callback(onTaskSelect(8979).GameControllerIcon, {}) };
  const intl2 = onTaskSelect(1212).intl;
  obj.label = intl2.string(onTaskSelect(1212).t["8lAfuB"]);
  obj.onPress = function onPress() {
    let tmp;
    if (null != onTaskSelect) {
      tmp = onTaskSelect(outer1_2.CONSOLE);
    }
    return tmp;
  };
  items[1] = callback(onTaskSelect(5165).TableRow, obj);
  obj.children = items;
  return callback2(onTaskSelect(5501).TableRowGroup, obj);
};
