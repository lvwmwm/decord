// Module ID: 16484
// Function ID: 16485
// Name: UserSettingSearchStore
// Dependencies: [5200, 2]

// Module 16484 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 5200 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
