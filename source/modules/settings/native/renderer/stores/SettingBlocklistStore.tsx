// Module ID: 13553
// Function ID: 104163
// Name: zustandStore
// Dependencies: [3998, 2]

// Module 13553 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => {
  const obj = { blocklist: new Set() };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
