// Module ID: 13604
// Function ID: 104487
// Name: zustandStore
// Dependencies: [3998, 2]

// Module 13604 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => {
  const obj = { blocklist: new Set() };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
