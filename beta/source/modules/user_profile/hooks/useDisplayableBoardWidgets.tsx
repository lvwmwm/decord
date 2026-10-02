// Module ID: 12456
// Function ID: 12457
// Name: useDisplayableBoardWidgets
// Dependencies: [19, 7051, 7048, 7041, 558, 576, 12457, 12458, 2]

// Module 12456 (useDisplayableBoardWidgets)
import react2 from "react" /* 576 */;
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 7041 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7051 */;
import UserProfileMobileGameCollectionExperiment from "UserProfileMobileGameCollectionExperiment" /* 12457 */;
import useUserProfileWidgetsDefault from "useUserProfileWidgets" /* 12458 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

function isNonEmptyBoardWidget(games) {
  let tmp3 = games instanceof UserProfileApplicationWidgetTypes.ApplicationWidget;
  if (!tmp3) {
    let tmp4 = games instanceof tmp(7048).UserProfilePersonalWidget;
    if (!tmp4) {
      const tmpResult = UserProfileGameWidgetTypes;
      tmp4 = tmpResult.isGameWidget(games) && games.games.length > 0;
      const isGameWidgetResult = tmpResult.isGameWidget(games) && games.games.length > 0;
    }
    tmp3 = tmp4;
  }
  return tmp3;
}
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let found;
  const obj = react2;
  const cResult = obj.c(3);
  const obj2 = UserProfileMobileGameCollectionExperiment;
  const isMobileGameCollectionExperimentEnabled = obj2.useIsMobileGameCollectionExperimentEnabled("UserProfileWidgetsBoard");
  const arr = useUserProfileWidgetsDefault(arg0);
  if (cResult[0] === isMobileGameCollectionExperimentEnabled) {
    let tmp3;
    if (cResult[1] === arr) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  if (isMobileGameCollectionExperimentEnabled) {
    found = arr.filter(isNonEmptyBoardWidget);
  } else {
    found = [];
  }
  cResult[0] = isMobileGameCollectionExperimentEnabled;
  cResult[1] = arr;
  cResult[2] = found;
  tmp3 = found;
}) : ((arg0) => {
  let closure_1;
  let isMobileGameCollectionExperimentEnabled;
  const obj = isMobileGameCollectionExperimentEnabled(12457);
  isMobileGameCollectionExperimentEnabled = obj.useIsMobileGameCollectionExperimentEnabled("UserProfileWidgetsBoard");
  const tmp2 = useUserProfileWidgetsDefault(arg0);
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
});
const result = size.fileFinishedImporting("modules/user_profile/hooks/useDisplayableBoardWidgets.tsx");

export const useDisplayableBoardWidgets = tmp2;
