// Module ID: 9369
// Function ID: 9370
// Name: PremiumNitroNavigationStore
// Dependencies: [5232, 2]

// Module 9369 (PremiumNitroNavigationStore)
import ZustandStore from "ZustandStore" /* 5232 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ scrollToSectionId: "top" }));
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
