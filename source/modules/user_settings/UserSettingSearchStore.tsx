// Module ID: 13680
// Function ID: 13681
// Name: zustandStore
// Dependencies: [4057, 2]

// Module 13680 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = require("set").fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
