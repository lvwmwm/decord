// Module ID: 9326
// Function ID: 9327
// Name: PremiumNitroNavigationStore
// Dependencies: [5201, 2]

// Module 9326 (PremiumNitroNavigationStore)
import ZustandStore from "ZustandStore" /* 5201 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ scrollToSectionId: "dispatch" }));
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
