// Module ID: 14707
// Function ID: 14708
// Name: PremiumNitroNavigationStore
// Dependencies: [5163, 2]

// Module 14707 (PremiumNitroNavigationStore)
import ZustandStore from "ZustandStore" /* 5163 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ scrollToSectionId: "Array" }));
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
