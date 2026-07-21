// Module ID: 9775
// Function ID: 76003
// Name: zustandStore
// Dependencies: []

// Module 9775 (zustandStore)
let closure_0 = require(dependencyMap[1]).ProfileCustomizationSubsection;
const zustandStore = require(dependencyMap[0]).createZustandStore(() => ({ subsection: constants.USER_PROFILE, scrollPosition: null }));
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/profile_customization/ProfileCustomizationNavigationStore.tsx");

export default zustandStore;
