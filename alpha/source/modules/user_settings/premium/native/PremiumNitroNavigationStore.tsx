// Module ID: 9373
// Function ID: 9374
// Name: PremiumNitroNavigationStore
// Dependencies: [5102, 2]

// Module 9373 (PremiumNitroNavigationStore)
import ZustandStore from "ZustandStore" /* 5102 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ scrollToSectionId: "Array" }));
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
