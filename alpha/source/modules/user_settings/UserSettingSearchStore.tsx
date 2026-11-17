// Module ID: 17252
// Function ID: 17253
// Name: UserSettingSearchStore
// Dependencies: [5499, 2]

// Module 17252 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 5499 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
