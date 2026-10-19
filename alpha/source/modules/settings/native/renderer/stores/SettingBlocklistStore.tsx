// Module ID: 15601
// Function ID: 15602
// Name: SettingBlocklistStore
// Dependencies: [5085, 2]

// Module 15601 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 5085 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  new Set();
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
