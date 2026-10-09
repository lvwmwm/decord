// Module ID: 14885
// Function ID: 14886
// Name: UserSettingSearchStore
// Dependencies: [4950, 2]

// Module 14885 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 4950 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
