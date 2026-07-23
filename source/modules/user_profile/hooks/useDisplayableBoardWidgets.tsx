// Module ID: 12101
// Function ID: 94823
// Name: isNonEmptyBoardWidget
// Dependencies: [31, 6876, 6858, 12102, 12103, 2]
// Exports: useDisplayableBoardWidgets

// Module 12101 (isNonEmptyBoardWidget)
import result from "result";

const require = arg1;
function isNonEmptyBoardWidget(games) {
  let tmp = games instanceof require(6876) /* ApplicationWidget */.ApplicationWidget;
  if (!tmp) {
    let isGameWidgetResult = require(6858) /* items */.isGameWidget(games);
    if (isGameWidgetResult) {
      isGameWidgetResult = games.games.length > 0;
    }
    tmp = isGameWidgetResult;
    const obj = require(6858) /* items */;
  }
  return tmp;
}
const result = require("items").fileFinishedImporting("modules/user_profile/hooks/useDisplayableBoardWidgets.tsx");

export const useDisplayableBoardWidgets = function useDisplayableBoardWidgets(id) {
  isMobileGameCollectionExperimentEnabled = isMobileGameCollectionExperimentEnabled(12102).useIsMobileGameCollectionExperimentEnabled("UserProfileWidgetsBoard");
  const tmp2 = importDefault(12103)(id);
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
