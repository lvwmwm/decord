// Module ID: 14456
// Function ID: 14457
// Name: UserSettingSearchStore
// Dependencies: [4735, 2]

// Module 14456 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 4735 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
