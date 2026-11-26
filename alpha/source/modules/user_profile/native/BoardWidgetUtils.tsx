// Module ID: 14678
// Function ID: 14679
// Name: BoardWidgetUtils
// Dependencies: [6174, 6171, 14570, 2]
// Exports: reorderBoardWidgets

// Module 14678 (BoardWidgetUtils)
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 6174 */;
import WidgetUtils from "WidgetUtils" /* 14570 */;
import size from "module_2" /* 2 */;

let tmp;
const UserProfileGameWidgetTypes = tmp(6171);
function isBoardWidget(widget) {
  let isGameWidgetResult = widget instanceof UserProfileApplicationWidgetTypes.ApplicationWidget;
  if (!isGameWidgetResult) {
    const tmpResult = UserProfileGameWidgetTypes;
    isGameWidgetResult = tmpResult.isGameWidget(widget);
  }
  return isGameWidgetResult;
}
let result = size.fileFinishedImporting("modules/user_profile/native/BoardWidgetUtils.tsx");

export { isBoardWidget };
export function reorderBoardWidgets(arg0, arg1) {
  const obj = WidgetUtils;
  const result = obj.reorderMovableWidgets(isBoardWidget, arg0, arg1);
}
