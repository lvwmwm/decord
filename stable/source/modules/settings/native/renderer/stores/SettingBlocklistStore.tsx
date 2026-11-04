// Module ID: 15864
// Function ID: 15865
// Name: SettingBlocklistStore
// Dependencies: [5195, 2]

// Module 15864 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 5195 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  new Set();
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
