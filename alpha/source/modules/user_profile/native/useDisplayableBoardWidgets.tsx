// Module ID: 10228
// Function ID: 10229
// Name: useDisplayableBoardWidgets
// Dependencies: [19, 10229, 6839, 2]
// Exports: useDisplayableBoardWidgets

// Module 10228 (useDisplayableBoardWidgets)
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
