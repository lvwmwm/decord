// Module ID: 12458
// Function ID: 12459
// Name: useDisplayableBoardWidgets
// Dependencies: [19, 7047, 7044, 7037, 12459, 12460, 2]
// Exports: useDisplayableBoardWidgets

// Module 12458 (useDisplayableBoardWidgets)
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 7037 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7047 */;
import useUserProfileWidgetsDefault from "useUserProfileWidgets" /* 12460 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let importDefault;

function isNonEmptyBoardWidget(games) {
  let tmp3 = games instanceof UserProfileApplicationWidgetTypes.ApplicationWidget;
  if (!tmp3) {
    let tmp4 = games instanceof tmp(7044).UserProfilePersonalWidget;
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

export const useDisplayableBoardWidgets = function useDisplayableBoardWidgets(id) {
  let closure_1;
  let isMobileGameCollectionExperimentEnabled;
  const obj = isMobileGameCollectionExperimentEnabled(12459);
  isMobileGameCollectionExperimentEnabled = obj.useIsMobileGameCollectionExperimentEnabled("UserProfileWidgetsBoard");
  const tmp2 = useUserProfileWidgetsDefault(id);
  importDefault = tmp2;
  const items = [isMobileGameCollectionExperimentEnabled, tmp2];
  return react.useMemo(() => {
    let found;
    const tmp = isMobileGameCollectionExperimentEnabled;
    if (tmp) {
      found = closure_1.filter(isNonEmptyBoardWidget);
    } else {
      found = [];
    }
    return found;
  }, items);
};
