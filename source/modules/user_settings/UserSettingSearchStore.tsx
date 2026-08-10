// Module ID: 13890
// Function ID: 13891
// Name: zustandStore
// Dependencies: [4170, 2]

// Module 13890 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = require("set").fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
