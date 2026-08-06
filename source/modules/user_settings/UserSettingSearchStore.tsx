// Module ID: 13804
// Function ID: 13805
// Name: zustandStore
// Dependencies: [4152, 2]

// Module 13804 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = require("set").fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
