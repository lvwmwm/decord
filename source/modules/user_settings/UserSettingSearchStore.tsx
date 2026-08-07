// Module ID: 13818
// Function ID: 13819
// Name: zustandStore
// Dependencies: [4169, 2]

// Module 13818 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = require("set").fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
