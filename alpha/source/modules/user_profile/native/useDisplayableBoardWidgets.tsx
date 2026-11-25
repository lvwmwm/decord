// Module ID: 14623
// Function ID: 14624
// Name: useDisplayableBoardWidgets
// Dependencies: [19, 14624, 6140, 2]
// Exports: useDisplayableBoardWidgets

// Module 14623 (useDisplayableBoardWidgets)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/native/useDisplayableBoardWidgets.tsx");

export function useDisplayableBoardWidgets(id, isEditing) {
  let flag = isEditing;
  if (isEditing === undefined) {
    flag = false;
  }
  let boardWidgets;
  let obj = flag(boardWidgets[1]);
  boardWidgets = obj.useBoardWidgets(id);
  const items = [boardWidgets, flag];
  return react.useMemo(() => {
    let found;
    if (flag) {
      found = arr;
    } else {
      found = arr.filter((games) => {
        const obj = flag(boardWidgets[2]);
        const isGameWidgetResult = obj.isGameWidget(games);
        let tmp2 = !isGameWidgetResult;
        if (isGameWidgetResult) {
          tmp2 = games.games.length > 0;
        }
        return tmp2;
      });
    }
    return found;
  }, items);
}
