// Module ID: 9997
// Function ID: 9998
// Name: PremiumNitroNavigationStore
// Dependencies: [5499, 2]

// Module 9997 (PremiumNitroNavigationStore)
import ZustandStore from "ZustandStore" /* 5499 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ scrollToSectionId: "r" }));
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
