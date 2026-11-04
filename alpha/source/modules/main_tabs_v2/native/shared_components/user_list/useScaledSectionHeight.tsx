// Module ID: 10915
// Function ID: 10916
// Name: useScaledSectionHeight
// Dependencies: [10912, 5776, 2]
// Exports: default

// Module 10915 (useScaledSectionHeight)
import useFontScale from "useFontScale" /* 5776 */;
import UsersFastListConstants from "UsersFastListConstants" /* 10912 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ USERS_LIST_SECTION_HEIGHT: c2, USERS_LIST_SECTION_TEXT_HEIGHT: c3 } = UsersFastListConstants);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledSectionHeight.tsx");

export default function useScaledSectionHeight() {
  const obj = useFontScale;
  return React2 + Math.max(Math.min(obj.useFontScale(), 2) * _false - _false, 0);
};
