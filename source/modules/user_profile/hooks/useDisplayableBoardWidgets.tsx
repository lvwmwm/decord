// Module ID: 12337
// Function ID: 12338
// Name: isNonEmptyBoardWidget
// Dependencies: [19, 6988, 6976, 12338, 12339, 2]
// Exports: useDisplayableBoardWidgets

// Module 12337 (isNonEmptyBoardWidget)
import noop from "noop";

const require = arg1;
function isNonEmptyBoardWidget(games) {
  let tmp3 = games instanceof require(6988) /* toSubmission */.ApplicationWidget;
  if (!tmp3) {
    let isGameWidgetResult = require(6976) /* items */.isGameWidget(games);
    if (isGameWidgetResult) {
      isGameWidgetResult = games.games.length > 0;
    }
    tmp3 = isGameWidgetResult;
    const tmpResult = require(6976) /* items */;
  }
  return tmp3;
}
const result = require("items").fileFinishedImporting("modules/user_profile/hooks/useDisplayableBoardWidgets.tsx");

export const useDisplayableBoardWidgets = function useDisplayableBoardWidgets(id) {
  isMobileGameCollectionExperimentEnabled = isMobileGameCollectionExperimentEnabled(12338).useIsMobileGameCollectionExperimentEnabled("UserProfileWidgetsBoard");
  const tmp2 = importDefault(12339)(id);
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
