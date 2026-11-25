// Module ID: 16141
// Function ID: 16142
// Name: UserSettingSearchStore
// Dependencies: [5201, 2]

// Module 16141 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 5201 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
