// Module ID: 13958
// Function ID: 13959
// Name: zustandStore
// Dependencies: [4209, 2]

// Module 13958 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = require("set").fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
