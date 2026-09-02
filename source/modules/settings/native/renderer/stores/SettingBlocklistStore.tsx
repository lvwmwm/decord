// Module ID: 14460
// Function ID: 14461
// Name: zustandStore
// Dependencies: [4344, 2]

// Module 14460 (zustandStore)
import set from "set" /* 2 */;
import defaultStatesAreEqual from "defaultStatesAreEqual" /* 4344 */;

const zustandStore = defaultStatesAreEqual.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  return obj;
});
const result = set.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
