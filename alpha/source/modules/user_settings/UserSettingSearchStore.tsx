// Module ID: 16018
// Function ID: 16019
// Name: UserSettingSearchStore
// Dependencies: [5164, 2]

// Module 16018 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 5164 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
