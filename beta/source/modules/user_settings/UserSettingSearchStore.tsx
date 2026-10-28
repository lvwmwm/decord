// Module ID: 16014
// Function ID: 16015
// Name: UserSettingSearchStore
// Dependencies: [5195, 2]

// Module 16014 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 5195 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
