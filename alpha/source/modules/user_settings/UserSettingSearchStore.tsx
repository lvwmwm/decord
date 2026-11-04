// Module ID: 16825
// Function ID: 16826
// Name: UserSettingSearchStore
// Dependencies: [5335, 2]

// Module 16825 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 5335 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
