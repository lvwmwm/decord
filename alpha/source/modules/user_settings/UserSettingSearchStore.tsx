// Module ID: 14517
// Function ID: 14518
// Name: UserSettingSearchStore
// Dependencies: [4755, 2]

// Module 14517 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 4755 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
