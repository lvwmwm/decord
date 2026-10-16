// Module ID: 14390
// Function ID: 14391
// Name: PremiumNitroNavigationStore
// Dependencies: [5048, 2]

// Module 14390 (PremiumNitroNavigationStore)
import ZustandStore from "ZustandStore" /* 5048 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ scrollToSectionId: "r" }));
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
