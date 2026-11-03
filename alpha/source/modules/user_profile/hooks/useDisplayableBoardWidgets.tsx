// Module ID: 15108
// Function ID: 15109
// Name: useDisplayableBoardWidgets
// Dependencies: [19, 7901, 7902, 7898, 15092, 2]
// Exports: useDisplayableBoardWidgets

// Module 15108 (useDisplayableBoardWidgets)
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 7898 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7901 */;
import useUserProfileWidgetsDefault from "useUserProfileWidgets" /* 15092 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function isNonEmptyBoardWidget(games) {
  let tmp3 = games instanceof UserProfileApplicationWidgetTypes.ApplicationWidget;
  if (!tmp3) {
    let tmp4 = games instanceof tmp(7902).UserProfilePersonalWidget;
    if (!tmp4) {
      const tmpResult = UserProfileGameWidgetTypes;
      tmp4 = tmpResult.isGameWidget(games) && games.games.length > 0;
      const isGameWidgetResult = tmpResult.isGameWidget(games) && games.games.length > 0;
    }
    tmp3 = tmp4;
  }
  return tmp3;
}
const result = size.fileFinishedImporting("modules/user_profile/hooks/useDisplayableBoardWidgets.tsx");

export function useDisplayableBoardWidgets(id) {
  const tmp = useUserProfileWidgetsDefault(id);
  let closure_0 = tmp;
  const items = [tmp];
  return react.useMemo(() => closure_0.filter(isNonEmptyBoardWidget), items);
}
