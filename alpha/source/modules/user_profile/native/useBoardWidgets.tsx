// Module ID: 14677
// Function ID: 14678
// Name: useBoardWidgets
// Dependencies: [19, 14566, 14678, 2]
// Exports: useBoardWidgets

// Module 14677 (useBoardWidgets)
import useUserProfileWidgetsDefault from "useUserProfileWidgets" /* 14566 */;
import BoardWidgetUtils from "BoardWidgetUtils" /* 14678 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/native/useBoardWidgets.tsx");

export function useBoardWidgets(stateFromStores) {
  const tmp = useUserProfileWidgetsDefault(stateFromStores);
  let closure_0 = tmp;
  const items = [tmp];
  return react.useMemo(() => closure_0.filter(BoardWidgetUtils.isBoardWidget), items);
}
