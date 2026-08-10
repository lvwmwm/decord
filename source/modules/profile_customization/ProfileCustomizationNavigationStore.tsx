// Module ID: 10136
// Function ID: 10137
// Name: zustandStore
// Dependencies: [4170, 685, 2]

// Module 10136 (zustandStore)
import { ProfileCustomizationSubsection as closure_0 } from "MAX_FAVORITES";

const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ subsection: constants.USER_PROFILE, scrollPosition: null }));
const result = require("set").fileFinishedImporting("modules/profile_customization/ProfileCustomizationNavigationStore.tsx");

export default zustandStore;
