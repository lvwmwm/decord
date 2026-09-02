// Module ID: 13296
// Function ID: 13297
// Name: zustandStore
// Dependencies: [4344, 2]

// Module 13296 (zustandStore)
import set from "set" /* 2 */;
import defaultStatesAreEqual from "defaultStatesAreEqual" /* 4344 */;

const zustandStore = defaultStatesAreEqual.createZustandStore(() => ({ scrollToSectionId: "r" }));
const result = set.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
