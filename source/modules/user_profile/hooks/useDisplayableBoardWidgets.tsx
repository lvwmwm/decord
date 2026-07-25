// Module ID: 12103
// Function ID: 94864
// Name: isNonEmptyBoardWidget
// Dependencies: [31, 5650, 5632, 12104, 12105, 2]
// Exports: useDisplayableBoardWidgets

// Module 12103 (isNonEmptyBoardWidget)
import result from "result";

const require = arg1;
function isNonEmptyBoardWidget(games) {
  let tmp = games instanceof require(5650) /* ApplicationWidget */.ApplicationWidget;
  if (!tmp) {
    let isGameWidgetResult = require(5632) /* items */.isGameWidget(games);
    if (isGameWidgetResult) {
      isGameWidgetResult = games.games.length > 0;
    }
    tmp = isGameWidgetResult;
    const obj = require(5632) /* items */;
  }
  return tmp;
}
const result = require("items").fileFinishedImporting("modules/user_profile/hooks/useDisplayableBoardWidgets.tsx");

export const useDisplayableBoardWidgets = function useDisplayableBoardWidgets(id) {
  isMobileGameCollectionExperimentEnabled = isMobileGameCollectionExperimentEnabled(12104).useIsMobileGameCollectionExperimentEnabled("UserProfileWidgetsBoard");
  const tmp2 = importDefault(12105)(id);
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
