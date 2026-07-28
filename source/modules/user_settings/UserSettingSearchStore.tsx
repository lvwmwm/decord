// Module ID: 13659
// Function ID: 104790
// Name: zustandStore
// Dependencies: [4033, 2]

// Module 13659 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = require("set").fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
