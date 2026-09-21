// Module ID: 14955
// Function ID: 14956
// Name: UserSettingSearchStore
// Dependencies: [4629, 2]

// Module 14955 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 4629 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
