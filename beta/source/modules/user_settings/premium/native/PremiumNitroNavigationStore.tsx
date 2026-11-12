// Module ID: 15594
// Function ID: 15595
// Name: PremiumNitroNavigationStore
// Dependencies: [5359, 2]

// Module 15594 (PremiumNitroNavigationStore)
import ZustandStore from "ZustandStore" /* 5359 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ scrollToSectionId: "r" }));
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
