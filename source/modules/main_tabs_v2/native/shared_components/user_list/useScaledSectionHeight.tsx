// Module ID: 10321
// Function ID: 10322
// Name: useScaledSectionHeight
// Dependencies: [10322, 4936, 2]
// Exports: default

// Module 10321 (useScaledSectionHeight)
import set from "set" /* 2 */;
import getFontScale from "getFontScale" /* 4936 */;
import PX_24 from "PX_24" /* 10322 */;

({ USERS_LIST_SECTION_HEIGHT: obj1, USERS_LIST_SECTION_TEXT_HEIGHT: c3 } = PX_24);
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledSectionHeight.tsx");

export default function useScaledSectionHeight() {
  return closure_2 + Math.max(Math.min(getFontScale.useFontScale(), 2) * closure_3 - closure_3, 0);
};
