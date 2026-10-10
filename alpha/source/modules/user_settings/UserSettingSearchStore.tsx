// Module ID: 14944
// Function ID: 14945
// Name: UserSettingSearchStore
// Dependencies: [4989, 2]

// Module 14944 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 4989 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
