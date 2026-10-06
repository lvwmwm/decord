// Module ID: 13220
// Function ID: 13221
// Name: PremiumNitroNavigationStore
// Dependencies: [4755, 2]

// Module 13220 (PremiumNitroNavigationStore)
import ZustandStore from "ZustandStore" /* 4755 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ scrollToSectionId: "r" }));
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
