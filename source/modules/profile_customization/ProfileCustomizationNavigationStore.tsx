// Module ID: 9783
// Function ID: 76057
// Name: zustandStore
// Dependencies: [3998, 662, 2]

// Module 9783 (zustandStore)
import { ProfileCustomizationSubsection as closure_0 } from "MAX_FAVORITES";

const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ subsection: constants.USER_PROFILE, scrollPosition: null }));
const result = require("set").fileFinishedImporting("modules/profile_customization/ProfileCustomizationNavigationStore.tsx");

export default zustandStore;
