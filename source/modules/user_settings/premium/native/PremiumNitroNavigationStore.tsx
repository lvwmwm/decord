// Module ID: 12693
// Function ID: 12694
// Name: zustandStore
// Dependencies: [4170, 2]

// Module 12693 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ scrollToSectionId: "r" }));
const result = require("set").fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
