// Module ID: 16581
// Function ID: 16582
// Name: SettingBlocklistStore
// Dependencies: [5334, 2]

// Module 16581 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 5334 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  new Set();
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
