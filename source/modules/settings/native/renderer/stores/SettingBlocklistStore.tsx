// Module ID: 13615
// Function ID: 104614
// Name: zustandStore
// Dependencies: [3999, 2]

// Module 13615 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => {
  const obj = { blocklist: new Set() };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
