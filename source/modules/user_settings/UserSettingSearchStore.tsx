// Module ID: 14616
// Function ID: 14617
// Name: zustandStore
// Dependencies: [4347, 2]

// Module 14616 (zustandStore)
import set from "set" /* 2 */;
import defaultStatesAreEqual from "defaultStatesAreEqual" /* 4347 */;

const zustandStore = defaultStatesAreEqual.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = set.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
