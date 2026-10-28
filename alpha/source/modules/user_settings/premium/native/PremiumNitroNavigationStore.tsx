// Module ID: 14966
// Function ID: 14967
// Name: PremiumNitroNavigationStore
// Dependencies: [5199, 2]

// Module 14966 (PremiumNitroNavigationStore)
import ZustandStore from "ZustandStore" /* 5199 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ scrollToSectionId: "paths" }));
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
