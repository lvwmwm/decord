// Module ID: 14501
// Function ID: 14502
// Name: useBoardWidgets
// Dependencies: [19, 14391, 14502, 2]
// Exports: useBoardWidgets

// Module 14501 (useBoardWidgets)
import useUserProfileWidgetsDefault from "useUserProfileWidgets" /* 14391 */;
import BoardWidgetUtils from "BoardWidgetUtils" /* 14502 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/native/useBoardWidgets.tsx");

export function useBoardWidgets(stateFromStores) {
  const tmp = useUserProfileWidgetsDefault(stateFromStores);
  let closure_0 = tmp;
  const items = [tmp];
  return react.useMemo(() => closure_0.filter(BoardWidgetUtils.isBoardWidget), items);
}
