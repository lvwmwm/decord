// Module ID: 14743
// Function ID: 14744
// Name: PremiumNitroNavigationStore
// Dependencies: [5164, 2]

// Module 14743 (PremiumNitroNavigationStore)
import ZustandStore from "ZustandStore" /* 5164 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ scrollToSectionId: "rejectWithError" }));
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
