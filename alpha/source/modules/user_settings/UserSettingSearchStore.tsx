// Module ID: 14777
// Function ID: 14778
// Name: UserSettingSearchStore
// Dependencies: [4949, 2]

// Module 14777 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 4949 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
