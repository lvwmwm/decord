// Module ID: 14929
// Function ID: 14930
// Name: useDisplayableBoardWidgets
// Dependencies: [19, 7770, 7771, 7767, 14930, 2]
// Exports: useDisplayableBoardWidgets

// Module 14929 (useDisplayableBoardWidgets)
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 7767 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7770 */;
import useUserProfileWidgetsDefault from "useUserProfileWidgets" /* 14930 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function isNonEmptyBoardWidget(games) {
  let tmp3 = games instanceof UserProfileApplicationWidgetTypes.ApplicationWidget;
  if (!tmp3) {
    let tmp4 = games instanceof tmp(7771).UserProfilePersonalWidget;
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
