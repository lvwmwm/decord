// Module ID: 13354
// Function ID: 13355
// Name: useDisplayableBoardWidgets
// Dependencies: [19, 7325, 7326, 7322, 558, 576, 13355, 2]

// Module 13354 (useDisplayableBoardWidgets)
import react2 from "react" /* 576 */;
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 7322 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7325 */;
import useUserProfileWidgetsDefault from "useUserProfileWidgets" /* 13355 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function isNonEmptyBoardWidget(games) {
  let tmp3 = games instanceof UserProfileApplicationWidgetTypes.ApplicationWidget;
  if (!tmp3) {
    let tmp4 = games instanceof tmp(7326).UserProfilePersonalWidget;
    if (!tmp4) {
      const tmpResult = UserProfileGameWidgetTypes;
      tmp4 = tmpResult.isGameWidget(games) && games.games.length > 0;
      const isGameWidgetResult = tmpResult.isGameWidget(games) && games.games.length > 0;
    }
    tmp3 = tmp4;
  }
  return tmp3;
}
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDisplayableBoardWidgets(arg0) {
  let tmp2;
  const obj = react2;
  const cResult = obj.c(2);
  const arr = useUserProfileWidgetsDefault(arg0);
  if (cResult[0] !== arr) {
    const found = arr.filter(isNonEmptyBoardWidget);
    cResult[0] = arr;
    cResult[1] = found;
    tmp2 = found;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : (function useDisplayableBoardWidgets(arg0) {
  const tmp = useUserProfileWidgetsDefault(arg0);
  let closure_0 = tmp;
  const items = [tmp];
  return react.useMemo(() => closure_0.filter(isNonEmptyBoardWidget), items);
});
const result = size.fileFinishedImporting("modules/user_profile/hooks/useDisplayableBoardWidgets.tsx");

export const useDisplayableBoardWidgets = tmp2;
