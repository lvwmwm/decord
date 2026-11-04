// Module ID: 10737
// Function ID: 10738
// Name: useScaledSectionHeight
// Dependencies: [10734, 5642, 2]
// Exports: default

// Module 10737 (useScaledSectionHeight)
import useFontScale from "useFontScale" /* 5642 */;
import UsersFastListConstants from "UsersFastListConstants" /* 10734 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ USERS_LIST_SECTION_HEIGHT: c2, USERS_LIST_SECTION_TEXT_HEIGHT: c3 } = UsersFastListConstants);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledSectionHeight.tsx");

export default function useScaledSectionHeight() {
  const obj = useFontScale;
  return React2 + Math.max(Math.min(obj.useFontScale(), 2) * _false - _false, 0);
};
