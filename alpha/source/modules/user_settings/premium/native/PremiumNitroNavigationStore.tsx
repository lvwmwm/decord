// Module ID: 14523
// Function ID: 14524
// Name: PremiumNitroNavigationStore
// Dependencies: [5124, 2]

// Module 14523 (PremiumNitroNavigationStore)
import ZustandStore from "ZustandStore" /* 5124 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ scrollToSectionId: "r" }));
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
