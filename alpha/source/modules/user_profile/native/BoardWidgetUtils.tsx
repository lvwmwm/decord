// Module ID: 10350
// Function ID: 10351
// Name: BoardWidgetUtils
// Dependencies: [6961, 6958, 10217, 2]
// Exports: reorderBoardWidgets

// Module 10350 (BoardWidgetUtils)
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 6961 */;
import WidgetUtils from "WidgetUtils" /* 10217 */;
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
