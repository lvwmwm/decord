// Module ID: 14994
// Function ID: 14995
// Name: UserSettingSearchStore
// Dependencies: [4658, 2]

// Module 14994 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 4658 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
