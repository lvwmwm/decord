// Module ID: 14350
// Function ID: 14351
// Name: SettingBlocklistStore
// Dependencies: [4734, 2]

// Module 14350 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 4734 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
