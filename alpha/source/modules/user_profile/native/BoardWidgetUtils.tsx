// Module ID: 14685
// Function ID: 14686
// Name: BoardWidgetUtils
// Dependencies: [6174, 6171, 14577, 2]
// Exports: reorderBoardWidgets

// Module 14685 (BoardWidgetUtils)
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 6174 */;
import WidgetUtils from "WidgetUtils" /* 14577 */;
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
