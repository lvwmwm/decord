// Module ID: 14990
// Function ID: 14991
// Name: UserSettingSearchStore
// Dependencies: [4661, 2]

// Module 14990 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 4661 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
