// Module ID: 13230
// Function ID: 13231
// Name: useDisplayableBoardWidgets
// Dependencies: [19, 7906, 7903, 7896, 558, 568, 13231, 13232, 2]

// Module 13230 (useDisplayableBoardWidgets)
import c from "c" /* 568 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7906 */;
import UserProfileMobileGameCollectionExperiment from "UserProfileMobileGameCollectionExperiment" /* 13231 */;
import useUserProfileWidgetsDefault from "useUserProfileWidgets" /* 13232 */;
import noop from "module_19" /* 19 */;

require = fn;
function isNonEmptyBoardWidget(games) {
  let tmp3 = games instanceof UserProfileApplicationWidgetTypes.ApplicationWidget;
  if (!tmp3) {
    let tmp4 = games instanceof tmp(7903).UserProfilePersonalWidget;
    if (!tmp4) {
      let isGameWidgetResult = tmp(7896).isGameWidget(games);
      if (isGameWidgetResult) {
        isGameWidgetResult = games.games.length > 0;
      }
      tmp4 = isGameWidgetResult;
      const tmpResult = tmp(7896);
    }
    tmp3 = tmp4;
  }
  return tmp3;
}
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useDisplayableBoardWidgets.tsx");

export const useDisplayableBoardWidgets = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(3);
  const isMobileGameCollectionExperimentEnabled = UserProfileMobileGameCollectionExperiment.useIsMobileGameCollectionExperimentEnabled("UserProfileWidgetsBoard");
  const arr = useUserProfileWidgetsDefault(arg0);
  if (cResult[0] === isMobileGameCollectionExperimentEnabled) {
    if (cResult[1] === arr) {
      return cResult[2];
    }
  }
  if (isMobileGameCollectionExperimentEnabled) {
    let found = arr.filter(isNonEmptyBoardWidget);
  } else {
    found = [];
  }
  cResult[0] = isMobileGameCollectionExperimentEnabled;
  cResult[1] = arr;
  cResult[2] = found;
}) : ((arg0) => {
  isMobileGameCollectionExperimentEnabled = isMobileGameCollectionExperimentEnabled(13231).useIsMobileGameCollectionExperimentEnabled("UserProfileWidgetsBoard");
  const tmp2 = useUserProfileWidgetsDefault(arg0);
  importDefault = tmp2;
  const items = [isMobileGameCollectionExperimentEnabled, tmp2];
  return noop.useMemo(() => {
    if (isMobileGameCollectionExperimentEnabled) {
      let found = closure_1.filter(isNonEmptyBoardWidget);
    } else {
      found = [];
    }
    return found;
  }, items);
});
