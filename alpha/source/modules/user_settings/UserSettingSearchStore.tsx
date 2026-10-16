// Module ID: 15664
// Function ID: 15665
// Name: UserSettingSearchStore
// Dependencies: [5048, 2]

// Module 15664 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 5048 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
