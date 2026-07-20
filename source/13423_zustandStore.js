// Module ID: 13423
// Function ID: 101929
// Name: zustandStore
// Dependencies: []

// Module 13423 (zustandStore)
const zustandStore = require(dependencyMap[0]).createZustandStore(() => {
  const obj = { blocklist: new Set() };
  return obj;
});
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
