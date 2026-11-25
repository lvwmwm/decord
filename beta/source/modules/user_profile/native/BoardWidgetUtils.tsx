// Module ID: 10355
// Function ID: 10356
// Name: BoardWidgetUtils
// Dependencies: [6961, 6958, 10222, 2]
// Exports: reorderBoardWidgets

// Module 10355 (BoardWidgetUtils)
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 6961 */;
import WidgetUtils from "WidgetUtils" /* 10222 */;
import size from "module_2" /* 2 */;

let tmp;
const UserProfileGameWidgetTypes = tmp(6958);
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
