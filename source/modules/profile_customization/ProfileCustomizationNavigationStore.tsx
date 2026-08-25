// Module ID: 10290
// Function ID: 10291
// Name: zustandStore
// Dependencies: [4246, 685, 2]

// Module 10290 (zustandStore)
import set from "set" /* 2 */;
import MAX_FAVORITES from "MAX_FAVORITES" /* 685 */;
import defaultStatesAreEqual from "defaultStatesAreEqual" /* 4246 */;

let closure_0 = MAX_FAVORITES.ProfileCustomizationSubsection;
const zustandStore = defaultStatesAreEqual.createZustandStore(() => ({ subsection: constants.USER_PROFILE, scrollPosition: null }));
const result = set.fileFinishedImporting("modules/profile_customization/ProfileCustomizationNavigationStore.tsx");

export default zustandStore;
