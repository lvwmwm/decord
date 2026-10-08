// Module ID: 14650
// Function ID: 14651
// Name: SettingBlocklistStore
// Dependencies: [4949, 2]

// Module 14650 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 4949 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  new Set();
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
