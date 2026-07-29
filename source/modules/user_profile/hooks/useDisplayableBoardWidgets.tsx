// Module ID: 12171
// Function ID: 12172
// Name: isNonEmptyBoardWidget
// Dependencies: [19, 5918, 5898, 12172, 12173, 2]
// Exports: useDisplayableBoardWidgets

// Module 12171 (isNonEmptyBoardWidget)
import noop from "noop";

const require = arg1;
function isNonEmptyBoardWidget(games) {
  let tmp3 = games instanceof require(5918) /* toSubmission */.ApplicationWidget;
  if (!tmp3) {
    let isGameWidgetResult = require(5898) /* items */.isGameWidget(games);
    if (isGameWidgetResult) {
      isGameWidgetResult = games.games.length > 0;
    }
    tmp3 = isGameWidgetResult;
    const tmpResult = require(5898) /* items */;
  }
  return tmp3;
}
const result = require("items").fileFinishedImporting("modules/user_profile/hooks/useDisplayableBoardWidgets.tsx");

export const useDisplayableBoardWidgets = function useDisplayableBoardWidgets(id) {
  isMobileGameCollectionExperimentEnabled = isMobileGameCollectionExperimentEnabled(12172).useIsMobileGameCollectionExperimentEnabled("UserProfileWidgetsBoard");
  const tmp2 = importDefault(12173)(id);
  importDefault = tmp2;
  const items = [isMobileGameCollectionExperimentEnabled, tmp2];
  return React.useMemo(() => {
    if (isMobileGameCollectionExperimentEnabled) {
      let found = tmp2.filter(outer1_4);
    } else {
      found = [];
    }
    return found;
  }, items);
};
