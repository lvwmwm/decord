// Module ID: 9683
// Function ID: 9684
// Name: useScaledSectionHeight
// Dependencies: [9681, 4756, 2]
// Exports: default

// Module 9683 (useScaledSectionHeight)
import set from "set" /* 2 */;
import getFontScale from "getFontScale" /* 4756 */;
import PX_24 from "PX_24" /* 9681 */;

({ USERS_LIST_SECTION_HEIGHT: obj1, USERS_LIST_SECTION_TEXT_HEIGHT: c3 } = PX_24);
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledSectionHeight.tsx");

export default function useScaledSectionHeight() {
  return closure_2 + Math.max(Math.min(getFontScale.useFontScale(), 2) * closure_3 - closure_3, 0);
};
