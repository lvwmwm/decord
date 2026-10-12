// Module ID: 14967
// Function ID: 14968
// Name: UserSettingSearchStore
// Dependencies: [4989, 2]

// Module 14967 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 4989 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
