// Module ID: 17217
// Function ID: 17218
// Name: UserSettingSearchStore
// Dependencies: [5495, 2]

// Module 17217 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 5495 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
