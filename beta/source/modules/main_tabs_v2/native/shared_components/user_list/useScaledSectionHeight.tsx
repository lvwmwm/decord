// Module ID: 10888
// Function ID: 10889
// Name: useScaledSectionHeight
// Dependencies: [10885, 5798, 2]
// Exports: default

// Module 10888 (useScaledSectionHeight)
import useFontScale from "useFontScale" /* 5798 */;
import UsersFastListConstants from "UsersFastListConstants" /* 10885 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ USERS_LIST_SECTION_HEIGHT: c2, USERS_LIST_SECTION_TEXT_HEIGHT: c3 } = UsersFastListConstants);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledSectionHeight.tsx");

export default function useScaledSectionHeight() {
  const obj = useFontScale;
  return React2 + Math.max(Math.min(obj.useFontScale(), 2) * _false - _false, 0);
};
