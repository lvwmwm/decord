// Module ID: 16907
// Function ID: 16908
// Name: UserSettingSearchStore
// Dependencies: [5327, 2]

// Module 16907 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 5327 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
