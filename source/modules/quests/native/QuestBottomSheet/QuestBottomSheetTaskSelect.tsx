// Module ID: 14468
// Function ID: 14469
// Name: QuestBottomSheetTaskSelect
// Dependencies: [19, 5201, 21, 5806, 5413, 12248, 1236, 8807, 2]
// Exports: default

// Module 14468 (QuestBottomSheetTaskSelect)
import "noop";
import { QuestTaskPlatform } from "QuestsExperimentLocations";
import jsxProd from "jsxProd";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetTaskSelect.tsx");

export default function QuestBottomSheetTaskSelect(onTaskSelect) {
  onTaskSelect = onTaskSelect.onTaskSelect;
  let obj = { hasIcons: true, children: null };
  obj = { arrow: true, icon: null, label: null, onPress: null };
  obj[1] = callback(onTaskSelect(12248).ScreenIcon, {});
  const intl = onTaskSelect(1236).intl;
  obj[2] = intl.string(onTaskSelect(1236).t["QXc01+"]);
  obj[3] = function onPress() {
    let tmpResult;
    if (onTaskSelect != null) {
      tmpResult = tmp(outer1_2.DESKTOP);
    }
    return tmpResult;
  };
  const items = [callback(onTaskSelect(5413).TableRow, obj), ];
  obj = { arrow: true, icon: null, label: null, onPress: null };
  obj[1] = callback(onTaskSelect(8807).GameControllerIcon, {});
  const intl2 = onTaskSelect(1236).intl;
  obj[2] = intl2.string(onTaskSelect(1236).t["8lAfuB"]);
  obj[3] = function onPress() {
    let tmpResult;
    if (onTaskSelect != null) {
      tmpResult = tmp(outer1_2.CONSOLE);
    }
    return tmpResult;
  };
  items[1] = callback(onTaskSelect(5413).TableRow, obj);
  obj[1] = items;
  return callback2(onTaskSelect(5806).TableRowGroup, obj);
};
