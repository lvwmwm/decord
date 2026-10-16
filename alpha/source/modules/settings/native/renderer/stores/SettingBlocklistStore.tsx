// Module ID: 15534
// Function ID: 15535
// Name: SettingBlocklistStore
// Dependencies: [5048, 2]

// Module 15534 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 5048 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  new Set();
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
