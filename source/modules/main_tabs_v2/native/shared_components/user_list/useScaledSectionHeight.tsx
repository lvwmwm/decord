// Module ID: 9689
// Function ID: 9690
// Name: useScaledSectionHeight
// Dependencies: [9687, 4783, 2]
// Exports: default

// Module 9689 (useScaledSectionHeight)
import PX_24 from "PX_24";

let c3;
let obj1;
({ USERS_LIST_SECTION_HEIGHT: obj1, USERS_LIST_SECTION_TEXT_HEIGHT: c3 } = PX_24);
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledSectionHeight.tsx");

export default function useScaledSectionHeight() {
  return closure_2 + Math.max(Math.min(require(4783) /* getFontScale */.useFontScale(), 2) * closure_3 - closure_3, 0);
};
