// Module ID: 14778
// Function ID: 14779
// Name: UserSettingSearchStore
// Dependencies: [4506, 2]

// Module 14778 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 4506 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
