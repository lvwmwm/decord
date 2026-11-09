// Module ID: 15565
// Function ID: 15566
// Name: PremiumNitroNavigationStore
// Dependencies: [5327, 2]

// Module 15565 (PremiumNitroNavigationStore)
import ZustandStore from "ZustandStore" /* 5327 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ scrollToSectionId: "uri" }));
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
