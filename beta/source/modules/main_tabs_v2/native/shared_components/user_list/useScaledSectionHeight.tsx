// Module ID: 11207
// Function ID: 11208
// Name: useScaledSectionHeight
// Dependencies: [11205, 558, 5227, 2]

// Module 11207 (useScaledSectionHeight)
import useFontScale from "useFontScale" /* 5227 */;
import UsersFastListConstants from "UsersFastListConstants" /* 11205 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

({ USERS_LIST_SECTION_HEIGHT: c2, USERS_LIST_SECTION_TEXT_HEIGHT: c3 } = UsersFastListConstants);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledSectionHeight.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => React2 + Math.max(Math.min(useFontScale.useFontScale(), 2) * React3 - React3, 0)) : (() => React2 + Math.max(Math.min(useFontScale.useFontScale(), 2) * React3 - React3, 0));
