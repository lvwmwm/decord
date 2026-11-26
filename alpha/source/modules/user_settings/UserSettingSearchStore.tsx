// Module ID: 16192
// Function ID: 16193
// Name: UserSettingSearchStore
// Dependencies: [5232, 2]

// Module 16192 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 5232 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
