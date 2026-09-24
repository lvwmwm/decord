// Module ID: 13702
// Function ID: 13703
// Name: PremiumNitroNavigationStore
// Dependencies: [4661, 2]

// Module 13702 (PremiumNitroNavigationStore)
import ZustandStore from "ZustandStore" /* 4661 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ scrollToSectionId: "emoji" }));
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
