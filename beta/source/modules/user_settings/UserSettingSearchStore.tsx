// Module ID: 14966
// Function ID: 14967
// Name: UserSettingSearchStore
// Dependencies: [4626, 2]

// Module 14966 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 4626 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
