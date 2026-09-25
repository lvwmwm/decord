// Module ID: 14225
// Function ID: 14226
// Name: UserSettingSearchStore
// Dependencies: [4701, 2]

// Module 14225 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 4701 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
