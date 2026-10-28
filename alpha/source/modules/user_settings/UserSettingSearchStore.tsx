// Module ID: 16246
// Function ID: 16247
// Name: UserSettingSearchStore
// Dependencies: [5199, 2]

// Module 16246 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 5199 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
