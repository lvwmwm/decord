// Module ID: 15154
// Function ID: 15155
// Name: SettingBlocklistStore
// Dependencies: [4989, 2]

// Module 15154 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 4989 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  new Set();
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
