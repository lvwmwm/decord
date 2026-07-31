// Module ID: 13699
// Function ID: 13700
// Name: zustandStore
// Dependencies: [4061, 2]

// Module 13699 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = require("set").fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
