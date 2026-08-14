// Module ID: 13961
// Function ID: 13962
// Name: zustandStore
// Dependencies: [4209, 2]

// Module 13961 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = require("set").fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
