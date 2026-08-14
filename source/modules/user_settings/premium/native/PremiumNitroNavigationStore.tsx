// Module ID: 12771
// Function ID: 12772
// Name: zustandStore
// Dependencies: [4209, 2]

// Module 12771 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ scrollToSectionId: "title" }));
const result = require("set").fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
