// Module ID: 15279
// Function ID: 15280
// Name: PremiumNitroNavigationStore
// Dependencies: [5211, 2]

// Module 15279 (PremiumNitroNavigationStore)
import ZustandStore from "ZustandStore" /* 5211 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ scrollToSectionId: "r" }));
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
