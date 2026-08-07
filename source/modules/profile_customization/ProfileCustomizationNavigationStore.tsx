// Module ID: 10069
// Function ID: 10070
// Name: zustandStore
// Dependencies: [4169, 685, 2]

// Module 10069 (zustandStore)
import { ProfileCustomizationSubsection as closure_0 } from "MAX_FAVORITES";

const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ subsection: constants.USER_PROFILE, scrollPosition: null }));
const result = require("set").fileFinishedImporting("modules/profile_customization/ProfileCustomizationNavigationStore.tsx");

export default zustandStore;
