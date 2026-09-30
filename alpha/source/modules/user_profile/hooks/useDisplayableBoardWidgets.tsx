// Module ID: 12659
// Function ID: 12660
// Name: useDisplayableBoardWidgets
// Dependencies: [19, 7242, 7239, 7232, 12660, 2]
// Exports: useDisplayableBoardWidgets

// Module 12659 (useDisplayableBoardWidgets)
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7242 */;
import useUserProfileWidgetsDefault from "useUserProfileWidgets" /* 12660 */;
import noop from "module_19" /* 19 */;

require = fn;
function isNonEmptyBoardWidget(games) {
  let tmp3 = games instanceof UserProfileApplicationWidgetTypes.ApplicationWidget;
  if (!tmp3) {
    let tmp4 = games instanceof tmp(7239).UserProfilePersonalWidget;
    if (!tmp4) {
      let isGameWidgetResult = tmp(7232).isGameWidget(games);
      if (isGameWidgetResult) {
        isGameWidgetResult = games.games.length > 0;
      }
      tmp4 = isGameWidgetResult;
      const tmpResult = tmp(7232);
    }
    tmp3 = tmp4;
  }
  return tmp3;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useDisplayableBoardWidgets.tsx");

export const useDisplayableBoardWidgets = function useDisplayableBoardWidgets(id) {
  const tmp = useUserProfileWidgetsDefault(id);
  closure_0 = tmp;
  const items = [tmp];
  return noop.useMemo(() => closure_0.filter(isNonEmptyBoardWidget), items);
};
