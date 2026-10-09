// Module ID: 14889
// Function ID: 14890
// Name: useHighlightSettingItem
// Dependencies: [14885, 558, 576, 2]

// Module 14889 (useHighlightSettingItem)
import react from "react" /* 576 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 14885 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHighlightSettingItem(arg0) {
  let tmp2;
  let closure_0 = arg0;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const fn = function s(selected) {
      return selected.selected === closure_0;
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return UserSettingSearchStore.useState(tmp2);
}) : (function useHighlightSettingItem(arg0) {
  let closure_0 = arg0;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = tmp2;
