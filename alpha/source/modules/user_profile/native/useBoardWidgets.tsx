// Module ID: 14624
// Function ID: 14625
// Name: useBoardWidgets
// Dependencies: [19, 14514, 14625, 2]
// Exports: useBoardWidgets

// Module 14624 (useBoardWidgets)
import useUserProfileWidgetsDefault from "useUserProfileWidgets" /* 14514 */;
import BoardWidgetUtils from "BoardWidgetUtils" /* 14625 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/native/useBoardWidgets.tsx");

export function useBoardWidgets(stateFromStores) {
  const tmp = useUserProfileWidgetsDefault(stateFromStores);
  let closure_0 = tmp;
  const items = [tmp];
  return react.useMemo(() => closure_0.filter(BoardWidgetUtils.isBoardWidget), items);
}
