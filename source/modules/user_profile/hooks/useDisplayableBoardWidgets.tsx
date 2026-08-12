// Module ID: 12524
// Function ID: 12525
// Name: isNonEmptyBoardWidget
// Dependencies: [19, 7134, 7131, 7124, 12525, 12526, 2]
// Exports: useDisplayableBoardWidgets

// Module 12524 (isNonEmptyBoardWidget)
import noop from "noop";

const require = arg1;
function isNonEmptyBoardWidget(games) {
  let tmp3 = games instanceof require(7134) /* toSubmission */.ApplicationWidget;
  if (!tmp3) {
    let tmp4 = games instanceof tmp(7131).UserProfilePersonalWidget;
    if (!tmp4) {
      let isGameWidgetResult = tmp(7124).isGameWidget(games);
      if (isGameWidgetResult) {
        isGameWidgetResult = games.games.length > 0;
      }
      tmp4 = isGameWidgetResult;
      const tmpResult = tmp(7124);
    }
    tmp3 = tmp4;
  }
  return tmp3;
}
const result = require("isFieldEmpty").fileFinishedImporting("modules/user_profile/hooks/useDisplayableBoardWidgets.tsx");

export const useDisplayableBoardWidgets = function useDisplayableBoardWidgets(id) {
  isMobileGameCollectionExperimentEnabled = isMobileGameCollectionExperimentEnabled(12525).useIsMobileGameCollectionExperimentEnabled("UserProfileWidgetsBoard");
  const tmp2 = importDefault(12526)(id);
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
