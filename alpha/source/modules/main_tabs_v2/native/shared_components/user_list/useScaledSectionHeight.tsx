// Module ID: 10513
// Function ID: 10514
// Name: useScaledSectionHeight
// Dependencies: [10511, 5881, 2]
// Exports: default

// Module 10513 (useScaledSectionHeight)
import useFontScale from "useFontScale" /* 5881 */;
import UsersFastListConstants from "UsersFastListConstants" /* 10511 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ USERS_LIST_SECTION_HEIGHT: c2, USERS_LIST_SECTION_TEXT_HEIGHT: c3 } = UsersFastListConstants);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledSectionHeight.tsx");

export default function useScaledSectionHeight() {
  const obj = useFontScale;
  return React2 + Math.max(Math.min(obj.useFontScale(), 2) * _false - _false, 0);
};
