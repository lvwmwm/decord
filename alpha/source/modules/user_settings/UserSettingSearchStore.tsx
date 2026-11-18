// Module ID: 15909
// Function ID: 15910
// Name: UserSettingSearchStore
// Dependencies: [5012, 2]

// Module 15909 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 5012 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
