// Module ID: 13552
// Function ID: 104161
// Name: zustandStore
// Dependencies: [3998, 2]

// Module 13552 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = require("set").fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
