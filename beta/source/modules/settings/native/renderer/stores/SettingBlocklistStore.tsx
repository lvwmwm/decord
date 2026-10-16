// Module ID: 14838
// Function ID: 14839
// Name: SettingBlocklistStore
// Dependencies: [4989, 2]

// Module 14838 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 4989 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  new Set();
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
