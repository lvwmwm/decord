// Module ID: 15488
// Function ID: 15489
// Name: SettingBlocklistStore
// Dependencies: [5045, 2]

// Module 15488 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 5045 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  new Set();
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
