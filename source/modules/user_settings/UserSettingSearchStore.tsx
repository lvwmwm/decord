// Module ID: 13888
// Function ID: 13889
// Name: zustandStore
// Dependencies: [4170, 2]

// Module 13888 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = require("set").fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
