// Module ID: 13612
// Function ID: 13613
// Name: PremiumNitroNavigationStore
// Dependencies: [4950, 2]

// Module 13612 (PremiumNitroNavigationStore)
import ZustandStore from "ZustandStore" /* 4950 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ scrollToSectionId: "r" }));
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
