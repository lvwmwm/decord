// Module ID: 16590
// Function ID: 16591
// Name: UserSettingSearchStore
// Dependencies: [5211, 2]

// Module 16590 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 5211 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
