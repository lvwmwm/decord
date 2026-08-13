// Module ID: 13950
// Function ID: 13951
// Name: zustandStore
// Dependencies: [4209, 2]

// Module 13950 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => {
  const obj = { blocklist: null };
  obj[0] = new Set();
  return obj;
});
const result = require("set").fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
