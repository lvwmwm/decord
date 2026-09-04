// Module ID: 15086
// Function ID: 15087
// Name: QuestBottomSheetTaskSelect
// Dependencies: [19, 5404, 21, 5642, 5560, 8809, 1233, 9152, 2]
// Exports: default

// Module 15086 (QuestBottomSheetTaskSelect)
import noopAll from "noop" /* 19 */;
import { QuestTaskPlatform } from "QuestsExperimentLocations" /* 5404 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetTaskSelect.tsx");

export default function QuestBottomSheetTaskSelect(onTaskSelect) {
  onTaskSelect = onTaskSelect.onTaskSelect;
  let obj = { hasIcons: true, children: null };
  obj = { arrow: true, icon: callback(onTaskSelect(8809).ScreenIcon, {}), label: null, onPress: null };
  const intl = onTaskSelect(1233).intl;
  obj[2] = intl.string(onTaskSelect(1233).t["QXc01+"]);
  obj[3] = function onPress() {
    let tmpResult;
    if (onTaskSelect != null) {
      tmpResult = tmp(closure_1_2.DESKTOP);
    }
    return tmpResult;
  };
  const items = [callback(onTaskSelect(5560).TableRow, obj), ];
  obj = { arrow: true, icon: callback(onTaskSelect(9152).GameControllerIcon, {}), label: null, onPress: null };
  const intl2 = onTaskSelect(1233).intl;
  obj[2] = intl2.string(onTaskSelect(1233).t["8lAfuB"]);
  obj[3] = function onPress() {
    let tmpResult;
    if (onTaskSelect != null) {
      tmpResult = tmp(closure_1_2.CONSOLE);
    }
    return tmpResult;
  };
  items[1] = callback(onTaskSelect(5560).TableRow, obj);
  obj[1] = items;
  return callback2(onTaskSelect(5642).TableRowGroup, obj);
};
