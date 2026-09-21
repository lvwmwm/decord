// Module ID: 13666
// Function ID: 13667
// Name: PremiumNitroNavigationStore
// Dependencies: [4629, 2]

// Module 13666 (PremiumNitroNavigationStore)
import ZustandStore from "ZustandStore" /* 4629 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ scrollToSectionId: "emoji" }));
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
