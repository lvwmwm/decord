// Module ID: 13614
// Function ID: 104612
// Name: zustandStore
// Dependencies: [3999, 2]

// Module 13614 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = require("set").fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
