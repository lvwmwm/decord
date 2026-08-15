// Module ID: 13993
// Function ID: 13994
// Name: zustandStore
// Dependencies: [4241, 2]

// Module 13993 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = require("set").fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
