// Module ID: 14739
// Function ID: 14740
// Name: PremiumNitroNavigationStore
// Dependencies: [5195, 2]

// Module 14739 (PremiumNitroNavigationStore)
import ZustandStore from "ZustandStore" /* 5195 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ scrollToSectionId: "r" }));
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
