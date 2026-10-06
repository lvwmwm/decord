// Module ID: 12937
// Function ID: 12938
// Name: PremiumNitroNavigationStore
// Dependencies: [4707, 2]

// Module 12937 (PremiumNitroNavigationStore)
import ZustandStore from "ZustandStore" /* 4707 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ scrollToSectionId: "r" }));
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
