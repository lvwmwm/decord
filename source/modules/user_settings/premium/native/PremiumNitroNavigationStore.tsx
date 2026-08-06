// Module ID: 12602
// Function ID: 12603
// Name: zustandStore
// Dependencies: [4152, 2]

// Module 12602 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ scrollToSectionId: "r" }));
const result = require("set").fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
