// Module ID: 12400
// Function ID: 96410
// Name: zustandStore
// Dependencies: [3998, 2]

// Module 12400 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ scrollToSectionId: undefined }));
const result = require("set").fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
