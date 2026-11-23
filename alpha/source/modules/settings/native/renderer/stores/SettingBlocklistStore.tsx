// Module ID: 15825
// Function ID: 15826
// Name: SettingBlocklistStore
// Dependencies: [5102, 2]

// Module 15825 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 5102 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  new Set();
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
