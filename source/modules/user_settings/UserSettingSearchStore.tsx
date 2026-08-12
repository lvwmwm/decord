// Module ID: 13954
// Function ID: 13955
// Name: zustandStore
// Dependencies: [4211, 2]

// Module 13954 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = require("set").fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
