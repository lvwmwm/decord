// Module ID: 13692
// Function ID: 13693
// Name: PremiumNitroNavigationStore
// Dependencies: [4658, 2]

// Module 13692 (PremiumNitroNavigationStore)
import ZustandStore from "ZustandStore" /* 4658 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ scrollToSectionId: "r" }));
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
