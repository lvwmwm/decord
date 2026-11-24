// Module ID: 15853
// Function ID: 15854
// Name: SettingBlocklistStore
// Dependencies: [5106, 2]

// Module 15853 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 5106 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  new Set();
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
