// Module ID: 15202
// Function ID: 15203
// Name: useDisplayableBoardWidgets
// Dependencies: [19, 7857, 7858, 7854, 15203, 2]
// Exports: useDisplayableBoardWidgets

// Module 15202 (useDisplayableBoardWidgets)
import useUserProfileWidgetsDefault from "useUserProfileWidgets" /* 15203 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let importDefault;

const result = size.fileFinishedImporting("modules/user_profile/hooks/useDisplayableBoardWidgets.tsx");

export function useDisplayableBoardWidgets(id, isEditing) {
  let closure_1;
  let flag = isEditing;
  if (isEditing === undefined) {
    flag = false;
  }
  let tmp = useUserProfileWidgetsDefault(id);
  importDefault = tmp;
  const items = [tmp, flag];
  return react.useMemo(() => closure_1.filter((games) => {
    let tmp = closure_1_0;
    let tmp4 = games instanceof flag(dependencyMap[1]).ApplicationWidget || games instanceof tmp2(tmp3[2]).UserProfilePersonalWidget;
    if (!tmp4) {
      const tmp2Result = flag(dependencyMap[3]);
      let isGameWidgetResult = tmp2Result.isGameWidget(games);
      if (isGameWidgetResult) {
        if (!tmp) {
          tmp = games.games.length > 0;
        }
        isGameWidgetResult = tmp;
      }
      tmp4 = isGameWidgetResult;
    }
    return tmp4;
  }), items);
}
