// Module ID: 15526
// Function ID: 15527
// Name: PremiumNitroNavigationStore
// Dependencies: [5337, 2]

// Module 15526 (PremiumNitroNavigationStore)
import ZustandStore from "ZustandStore" /* 5337 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ scrollToSectionId: "ti" }));
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
