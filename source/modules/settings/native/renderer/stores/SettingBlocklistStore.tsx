// Module ID: 13898
// Function ID: 13899
// Name: zustandStore
// Dependencies: [4170, 2]

// Module 13898 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => {
  const obj = { blocklist: null };
  obj[0] = new Set();
  return obj;
});
const result = require("set").fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
