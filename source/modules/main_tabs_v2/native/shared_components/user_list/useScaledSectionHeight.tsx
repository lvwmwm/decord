// Module ID: 8826
// Function ID: 69580
// Name: useScaledSectionHeight
// Dependencies: []
// Exports: default

// Module 8826 (useScaledSectionHeight)
const _module = require(dependencyMap[0]);
({ USERS_LIST_SECTION_HEIGHT: closure_2, USERS_LIST_SECTION_TEXT_HEIGHT: closure_3 } = _module);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledSectionHeight.tsx");

export default function useScaledSectionHeight() {
  return closure_2 + Math.max(Math.min(require(dependencyMap[1]).useFontScale(), 2) * closure_3 - closure_3, 0);
};
