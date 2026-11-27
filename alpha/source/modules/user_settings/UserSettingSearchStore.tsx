// Module ID: 16199
// Function ID: 16200
// Name: UserSettingSearchStore
// Dependencies: [5232, 2]

// Module 16199 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 5232 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
