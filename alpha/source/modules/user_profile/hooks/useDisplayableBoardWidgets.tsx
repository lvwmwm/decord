// Module ID: 12629
// Function ID: 12630
// Name: useDisplayableBoardWidgets
// Dependencies: [19, 7212, 7209, 7202, 12630, 2]
// Exports: useDisplayableBoardWidgets

// Module 12629 (useDisplayableBoardWidgets)
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7212 */;
import useUserProfileWidgetsDefault from "useUserProfileWidgets" /* 12630 */;
import noop from "module_19" /* 19 */;

require = fn;
function isNonEmptyBoardWidget(games) {
  let tmp3 = games instanceof UserProfileApplicationWidgetTypes.ApplicationWidget;
  if (!tmp3) {
    let tmp4 = games instanceof tmp(7209).UserProfilePersonalWidget;
    if (!tmp4) {
      let isGameWidgetResult = tmp(7202).isGameWidget(games);
      if (isGameWidgetResult) {
        isGameWidgetResult = games.games.length > 0;
      }
      tmp4 = isGameWidgetResult;
      const tmpResult = tmp(7202);
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
