// Module ID: 12165
// Function ID: 12166
// Name: isNonEmptyBoardWidget
// Dependencies: [19, 5916, 5896, 12166, 12167, 2]
// Exports: useDisplayableBoardWidgets

// Module 12165 (isNonEmptyBoardWidget)
import noop from "noop";

const require = arg1;
function isNonEmptyBoardWidget(games) {
  let tmp3 = games instanceof require(5916) /* toSubmission */.ApplicationWidget;
  if (!tmp3) {
    let isGameWidgetResult = require(5896) /* items */.isGameWidget(games);
    if (isGameWidgetResult) {
      isGameWidgetResult = games.games.length > 0;
    }
    tmp3 = isGameWidgetResult;
    const tmpResult = require(5896) /* items */;
  }
  return tmp3;
}
const result = require("items").fileFinishedImporting("modules/user_profile/hooks/useDisplayableBoardWidgets.tsx");

export const useDisplayableBoardWidgets = function useDisplayableBoardWidgets(id) {
  isMobileGameCollectionExperimentEnabled = isMobileGameCollectionExperimentEnabled(12166).useIsMobileGameCollectionExperimentEnabled("UserProfileWidgetsBoard");
  const tmp2 = importDefault(12167)(id);
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
