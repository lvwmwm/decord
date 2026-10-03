// Module ID: 14497
// Function ID: 14498
// Name: UserSettingSearchStore
// Dependencies: [4749, 2]

// Module 14497 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 4749 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
