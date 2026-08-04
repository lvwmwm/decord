// Module ID: 13797
// Function ID: 13798
// Name: zustandStore
// Dependencies: [4153, 2]

// Module 13797 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => {
  const obj = { blocklist: null };
  obj[0] = new Set();
  return obj;
});
const result = require("set").fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
