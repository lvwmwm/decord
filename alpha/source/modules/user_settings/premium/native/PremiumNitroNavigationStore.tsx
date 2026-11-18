// Module ID: 9277
// Function ID: 9278
// Name: PremiumNitroNavigationStore
// Dependencies: [5012, 2]

// Module 9277 (PremiumNitroNavigationStore)
import ZustandStore from "ZustandStore" /* 5012 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ scrollToSectionId: "find" }));
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
