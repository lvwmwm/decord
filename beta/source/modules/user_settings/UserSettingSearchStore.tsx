// Module ID: 14249
// Function ID: 14250
// Name: UserSettingSearchStore
// Dependencies: [4705, 2]

// Module 14249 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 4705 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
