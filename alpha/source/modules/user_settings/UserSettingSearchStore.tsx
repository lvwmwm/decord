// Module ID: 17215
// Function ID: 17216
// Name: UserSettingSearchStore
// Dependencies: [5505, 2]

// Module 17215 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 5505 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
