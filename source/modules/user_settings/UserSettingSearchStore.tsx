// Module ID: 13796
// Function ID: 13797
// Name: zustandStore
// Dependencies: [4153, 2]

// Module 13796 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = require("set").fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
