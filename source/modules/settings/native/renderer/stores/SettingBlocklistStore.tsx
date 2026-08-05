// Module ID: 13768
// Function ID: 13769
// Name: zustandStore
// Dependencies: [4123, 2]

// Module 13768 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => {
  const obj = { blocklist: null };
  obj[0] = new Set();
  return obj;
});
const result = require("set").fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
