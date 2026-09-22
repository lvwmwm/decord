// Module ID: 14973
// Function ID: 14974
// Name: UserSettingSearchStore
// Dependencies: [4627, 2]

// Module 14973 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 4627 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
