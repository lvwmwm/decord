// Module ID: 15995
// Function ID: 15996
// Name: UserSettingSearchStore
// Dependencies: [5102, 2]

// Module 15995 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 5102 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
