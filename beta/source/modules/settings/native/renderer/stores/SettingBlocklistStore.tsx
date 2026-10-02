// Module ID: 14129
// Function ID: 14130
// Name: SettingBlocklistStore
// Dependencies: [4707, 2]

// Module 14129 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 4707 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  new Set();
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
