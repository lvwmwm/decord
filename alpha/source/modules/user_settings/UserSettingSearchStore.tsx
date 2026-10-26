// Module ID: 15979
// Function ID: 15980
// Name: UserSettingSearchStore
// Dependencies: [5163, 2]

// Module 15979 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 5163 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
