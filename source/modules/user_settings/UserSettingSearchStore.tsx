// Module ID: 13767
// Function ID: 13768
// Name: zustandStore
// Dependencies: [4123, 2]

// Module 13767 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = require("set").fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
