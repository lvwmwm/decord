// Module ID: 13007
// Function ID: 13008
// Name: zustandStore
// Dependencies: [4312, 2]

// Module 13007 (zustandStore)
import set from "set" /* 2 */;
import defaultStatesAreEqual from "defaultStatesAreEqual" /* 4312 */;

const zustandStore = defaultStatesAreEqual.createZustandStore(() => ({ scrollToSectionId: "r" }));
const result = set.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
