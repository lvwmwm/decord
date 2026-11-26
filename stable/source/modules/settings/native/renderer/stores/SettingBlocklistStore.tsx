// Module ID: 17061
// Function ID: 17062
// Name: SettingBlocklistStore
// Dependencies: [5495, 2]

// Module 17061 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 5495 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  new Set();
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
