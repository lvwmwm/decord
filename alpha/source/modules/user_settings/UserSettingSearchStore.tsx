// Module ID: 16733
// Function ID: 16734
// Name: UserSettingSearchStore
// Dependencies: [5334, 2]

// Module 16733 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 5334 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
