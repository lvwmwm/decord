// Module ID: 15050
// Function ID: 15051
// Name: UserSettingSearchStore
// Dependencies: [4697, 2]

// Module 15050 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 4697 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
