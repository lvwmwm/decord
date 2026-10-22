// Module ID: 15900
// Function ID: 15901
// Name: UserSettingSearchStore
// Dependencies: [5149, 2]

// Module 15900 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 5149 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
