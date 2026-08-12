// Module ID: 9674
// Function ID: 9675
// Name: useScaledSectionHeight
// Dependencies: [9672, 4760, 2]
// Exports: default

// Module 9674 (useScaledSectionHeight)
import PX_24 from "PX_24";

let c3;
let obj1;
({ USERS_LIST_SECTION_HEIGHT: obj1, USERS_LIST_SECTION_TEXT_HEIGHT: c3 } = PX_24);
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledSectionHeight.tsx");

export default function useScaledSectionHeight() {
  return closure_2 + Math.max(Math.min(require(4760) /* getFontScale */.useFontScale(), 2) * closure_3 - closure_3, 0);
};
