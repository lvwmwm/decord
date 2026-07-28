// Module ID: 13660
// Function ID: 104792
// Name: zustandStore
// Dependencies: [4033, 2]

// Module 13660 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => {
  const obj = { blocklist: new Set() };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
