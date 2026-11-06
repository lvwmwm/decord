// Module ID: 16432
// Function ID: 16433
// Name: SettingBlocklistStore
// Dependencies: [5211, 2]

// Module 16432 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 5211 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  new Set();
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
