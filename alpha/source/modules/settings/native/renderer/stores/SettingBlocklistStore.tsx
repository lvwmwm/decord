// Module ID: 16753
// Function ID: 16754
// Name: SettingBlocklistStore
// Dependencies: [5327, 2]

// Module 16753 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 5327 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  new Set();
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
