// Module ID: 15201
// Function ID: 15202
// Name: PremiumNitroNavigationStore
// Dependencies: [5200, 2]

// Module 15201 (PremiumNitroNavigationStore)
import ZustandStore from "ZustandStore" /* 5200 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ scrollToSectionId: "r" }));
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
