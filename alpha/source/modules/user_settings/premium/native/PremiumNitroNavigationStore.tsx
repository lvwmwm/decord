// Module ID: 13765
// Function ID: 13766
// Name: PremiumNitroNavigationStore
// Dependencies: [4699, 2]

// Module 13765 (PremiumNitroNavigationStore)
import ZustandStore from "ZustandStore" /* 4699 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ scrollToSectionId: "r" }));
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
