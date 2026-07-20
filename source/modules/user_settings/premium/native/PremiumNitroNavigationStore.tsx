// Module ID: 7410
// Function ID: 59583
// Name: zustandStore
// Dependencies: []

// Module 7410 (zustandStore)
const zustandStore = require(dependencyMap[0]).createZustandStore(() => ({ scrollToSectionId: undefined }));
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
