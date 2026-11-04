// Module ID: 15188
// Function ID: 15189
// Name: useDisplayableBoardWidgets
// Dependencies: [19, 7917, 7918, 7914, 15166, 2]
// Exports: useDisplayableBoardWidgets

// Module 15188 (useDisplayableBoardWidgets)
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 7914 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7917 */;
import useUserProfileWidgetsDefault from "useUserProfileWidgets" /* 15166 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function isNonEmptyBoardWidget(games) {
  let tmp3 = games instanceof UserProfileApplicationWidgetTypes.ApplicationWidget;
  if (!tmp3) {
    let tmp4 = games instanceof tmp(7918).UserProfilePersonalWidget;
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
