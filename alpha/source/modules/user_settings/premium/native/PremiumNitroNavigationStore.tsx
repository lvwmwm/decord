// Module ID: 9984
// Function ID: 9985
// Name: PremiumNitroNavigationStore
// Dependencies: [5495, 2]

// Module 9984 (PremiumNitroNavigationStore)
import ZustandStore from "ZustandStore" /* 5495 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ scrollToSectionId: "r" }));
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
