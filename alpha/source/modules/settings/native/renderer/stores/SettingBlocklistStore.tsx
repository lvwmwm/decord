// Module ID: 14955
// Function ID: 14956
// Name: SettingBlocklistStore
// Dependencies: [4699, 2]

// Module 14955 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 4699 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
