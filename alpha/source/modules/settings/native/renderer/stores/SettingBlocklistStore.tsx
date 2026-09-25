// Module ID: 14117
// Function ID: 14118
// Name: SettingBlocklistStore
// Dependencies: [4701, 2]

// Module 14117 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 4701 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
