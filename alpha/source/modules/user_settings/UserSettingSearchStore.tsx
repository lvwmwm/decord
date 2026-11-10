// Module ID: 16934
// Function ID: 16935
// Name: UserSettingSearchStore
// Dependencies: [5329, 2]

// Module 16934 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 5329 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
