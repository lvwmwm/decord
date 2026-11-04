// Module ID: 16837
// Function ID: 16838
// Name: UserSettingSearchStore
// Dependencies: [5335, 2]

// Module 16837 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 5335 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
