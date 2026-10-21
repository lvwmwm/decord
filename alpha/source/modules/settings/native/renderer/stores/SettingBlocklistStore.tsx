// Module ID: 15725
// Function ID: 15726
// Name: SettingBlocklistStore
// Dependencies: [5145, 2]

// Module 15725 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 5145 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  new Set();
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
