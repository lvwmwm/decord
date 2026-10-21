// Module ID: 14597
// Function ID: 14598
// Name: PremiumNitroNavigationStore
// Dependencies: [5145, 2]

// Module 14597 (PremiumNitroNavigationStore)
import ZustandStore from "ZustandStore" /* 5145 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ scrollToSectionId: "r" }));
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
