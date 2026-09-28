// Module ID: 9673
// Function ID: 9674
// Name: useScaledSectionHeight
// Dependencies: [9674, 5288, 2]
// Exports: default

// Module 9673 (useScaledSectionHeight)
import useFontScale from "useFontScale" /* 5288 */;
import UsersFastListConstants from "UsersFastListConstants" /* 9674 */;
import size from "module_2" /* 2 */;

({ USERS_LIST_SECTION_HEIGHT: c2, USERS_LIST_SECTION_TEXT_HEIGHT: c3 } = UsersFastListConstants);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledSectionHeight.tsx");

export default function useScaledSectionHeight() {
  return React2 + Math.max(Math.min(useFontScale.useFontScale(), 2) * React3 - React3, 0);
};
