// Module ID: 16577
// Function ID: 16578
// Name: UserSettingSearchStore
// Dependencies: [5211, 2]

// Module 16577 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 5211 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
