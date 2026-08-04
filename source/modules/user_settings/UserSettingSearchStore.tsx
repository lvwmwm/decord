// Module ID: 13795
// Function ID: 13796
// Name: zustandStore
// Dependencies: [4153, 2]

// Module 13795 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = require("set").fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
