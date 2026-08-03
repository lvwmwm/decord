// Module ID: 12560
// Function ID: 12561
// Name: zustandStore
// Dependencies: [4123, 2]

// Module 12560 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ scrollToSectionId: "r" }));
const result = require("set").fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
