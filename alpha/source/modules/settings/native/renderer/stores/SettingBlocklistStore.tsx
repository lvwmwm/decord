// Module ID: 15750
// Function ID: 15751
// Name: SettingBlocklistStore
// Dependencies: [5012, 2]

// Module 15750 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 5012 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  new Set();
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
