// Module ID: 16694
// Function ID: 16695
// Name: SettingBlocklistStore
// Dependencies: [5357, 2]

// Module 16694 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 5357 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  new Set();
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
