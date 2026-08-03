// Module ID: 13762
// Function ID: 13763
// Name: zustandStore
// Dependencies: [4123, 2]

// Module 13762 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = require("set").fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
