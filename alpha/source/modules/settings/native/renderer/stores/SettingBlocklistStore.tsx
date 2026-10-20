// Module ID: 15649
// Function ID: 15650
// Name: SettingBlocklistStore
// Dependencies: [5124, 2]

// Module 15649 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 5124 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  new Set();
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
