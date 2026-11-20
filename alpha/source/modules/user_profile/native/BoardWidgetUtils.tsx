// Module ID: 10230
// Function ID: 10231
// Name: BoardWidgetUtils
// Dependencies: [6842, 6839, 10097, 2]
// Exports: reorderBoardWidgets

// Module 10230 (BoardWidgetUtils)
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 6842 */;
import WidgetUtils from "WidgetUtils" /* 10097 */;
import size from "module_2" /* 2 */;

let tmp;
const UserProfileGameWidgetTypes = tmp(6839);
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
