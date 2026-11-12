// Module ID: 17092
// Function ID: 17093
// Name: UserSettingSearchStore
// Dependencies: [5442, 2]

// Module 17092 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 5442 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
