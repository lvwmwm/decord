// Module ID: 8962
// Function ID: 8963
// Name: isNonEmptyBoardWidget
// Dependencies: [19, 7566, 7563, 7556, 8963, 8964, 2]
// Exports: useDisplayableBoardWidgets

// Module 8962 (isNonEmptyBoardWidget)
import toSubmission from "toSubmission" /* 7566 */;
import useUserProfileWidgetsDefault from "useUserProfileWidgets" /* 8964 */;
import closure_3 from "noop" /* 19 */;

require = arg1;
function isNonEmptyBoardWidget(games) {
  let tmp3 = games instanceof toSubmission.ApplicationWidget;
  if (!tmp3) {
    let tmp4 = games instanceof tmp(7563).UserProfilePersonalWidget;
    if (!tmp4) {
      let isGameWidgetResult = tmp(7556).isGameWidget(games);
      if (isGameWidgetResult) {
        isGameWidgetResult = games.games.length > 0;
      }
      tmp4 = isGameWidgetResult;
      const tmpResult = tmp(7556);
    }
    tmp3 = tmp4;
  }
  return tmp3;
}
const result = require("set").fileFinishedImporting("modules/user_profile/hooks/useDisplayableBoardWidgets.tsx");

export const useDisplayableBoardWidgets = function useDisplayableBoardWidgets(id) {
  isMobileGameCollectionExperimentEnabled = isMobileGameCollectionExperimentEnabled(8963).useIsMobileGameCollectionExperimentEnabled("UserProfileWidgetsBoard");
  const tmp2 = useUserProfileWidgetsDefault(id);
  importDefault = tmp2;
  const items = [isMobileGameCollectionExperimentEnabled, tmp2];
  return React.useMemo(() => {
    if (isMobileGameCollectionExperimentEnabled) {
      let found = closure_1.filter(closure_1_4);
    } else {
      found = [];
    }
    return found;
  }, items);
};
