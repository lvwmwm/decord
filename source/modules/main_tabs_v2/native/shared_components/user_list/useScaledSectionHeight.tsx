// Module ID: 8804
// Function ID: 69467
// Name: useScaledSectionHeight
// Dependencies: [8797, 4584, 2]
// Exports: default

// Module 8804 (useScaledSectionHeight)
import PX_24 from "PX_24";

let closure_2;
let closure_3;
({ USERS_LIST_SECTION_HEIGHT: closure_2, USERS_LIST_SECTION_TEXT_HEIGHT: closure_3 } = PX_24);
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledSectionHeight.tsx");

export default function useScaledSectionHeight() {
  return closure_2 + Math.max(Math.min(require(4584) /* getFontScale */.useFontScale(), 2) * closure_3 - closure_3, 0);
};
