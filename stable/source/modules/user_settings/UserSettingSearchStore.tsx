// Module ID: 16938
// Function ID: 16939
// Name: UserSettingSearchStore
// Dependencies: [5359, 2]

// Module 16938 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 5359 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
