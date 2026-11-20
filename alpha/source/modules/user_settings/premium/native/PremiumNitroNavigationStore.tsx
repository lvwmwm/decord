// Module ID: 9253
// Function ID: 9254
// Name: PremiumNitroNavigationStore
// Dependencies: [4983, 2]

// Module 9253 (PremiumNitroNavigationStore)
import ZustandStore from "ZustandStore" /* 4983 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ scrollToSectionId: "r" }));
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
