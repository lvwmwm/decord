// Module ID: 9137
// Function ID: 9138
// Name: zustandStore
// Dependencies: [4347, 682, 2]

// Module 9137 (zustandStore)
import set from "set" /* 2 */;
import MAX_FAVORITES from "MAX_FAVORITES" /* 682 */;
import defaultStatesAreEqual from "defaultStatesAreEqual" /* 4347 */;

let closure_0 = MAX_FAVORITES.ProfileCustomizationSubsection;
const zustandStore = defaultStatesAreEqual.createZustandStore(() => ({ subsection: constants.USER_PROFILE, scrollPosition: null }));
const result = set.fileFinishedImporting("modules/profile_customization/ProfileCustomizationNavigationStore.tsx");

export default zustandStore;
