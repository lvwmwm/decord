// Module ID: 13949
// Function ID: 13950
// Name: zustandStore
// Dependencies: [4209, 2]

// Module 13949 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = require("set").fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
