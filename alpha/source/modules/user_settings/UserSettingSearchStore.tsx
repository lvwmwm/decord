// Module ID: 15325
// Function ID: 15326
// Name: UserSettingSearchStore
// Dependencies: [4991, 2]

// Module 15325 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 4991 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
