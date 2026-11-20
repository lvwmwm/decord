// Module ID: 10229
// Function ID: 10230
// Name: useBoardWidgets
// Dependencies: [19, 10093, 10230, 2]
// Exports: useBoardWidgets

// Module 10229 (useBoardWidgets)
import useUserProfileWidgetsDefault from "useUserProfileWidgets" /* 10093 */;
import BoardWidgetUtils from "BoardWidgetUtils" /* 10230 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/native/useBoardWidgets.tsx");

export function useBoardWidgets(stateFromStores) {
  const tmp = useUserProfileWidgetsDefault(stateFromStores);
  let closure_0 = tmp;
  const items = [tmp];
  return react.useMemo(() => closure_0.filter(BoardWidgetUtils.isBoardWidget), items);
}
