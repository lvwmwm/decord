// Module ID: 13201
// Function ID: 13202
// Name: PremiumNitroNavigationStore
// Dependencies: [4749, 2]

// Module 13201 (PremiumNitroNavigationStore)
import ZustandStore from "ZustandStore" /* 4749 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ scrollToSectionId: "r" }));
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
