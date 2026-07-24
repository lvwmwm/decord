// Module ID: 12127
// Function ID: 95059
// Name: isNonEmptyBoardWidget
// Dependencies: [31, 6875, 6857, 12128, 12129, 2]
// Exports: useDisplayableBoardWidgets

// Module 12127 (isNonEmptyBoardWidget)
import result from "result";

const require = arg1;
function isNonEmptyBoardWidget(games) {
  let tmp = games instanceof require(6875) /* ApplicationWidget */.ApplicationWidget;
  if (!tmp) {
    let isGameWidgetResult = require(6857) /* items */.isGameWidget(games);
    if (isGameWidgetResult) {
      isGameWidgetResult = games.games.length > 0;
    }
    tmp = isGameWidgetResult;
    const obj = require(6857) /* items */;
  }
  return tmp;
}
const result = require("items").fileFinishedImporting("modules/user_profile/hooks/useDisplayableBoardWidgets.tsx");

export const useDisplayableBoardWidgets = function useDisplayableBoardWidgets(id) {
  isMobileGameCollectionExperimentEnabled = isMobileGameCollectionExperimentEnabled(12128).useIsMobileGameCollectionExperimentEnabled("UserProfileWidgetsBoard");
  const tmp2 = importDefault(12129)(id);
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
