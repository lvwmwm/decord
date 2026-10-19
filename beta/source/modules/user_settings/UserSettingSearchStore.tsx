// Module ID: 15734
// Function ID: 15735
// Name: UserSettingSearchStore
// Dependencies: [5085, 2]

// Module 15734 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 5085 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
