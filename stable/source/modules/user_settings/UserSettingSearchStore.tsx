// Module ID: 14237
// Function ID: 14238
// Name: UserSettingSearchStore
// Dependencies: [4707, 2]

// Module 14237 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 4707 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
