// Module ID: 15999
// Function ID: 16000
// Name: UserSettingSearchStore
// Dependencies: [5102, 2]

// Module 15999 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 5102 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
