// Module ID: 14866
// Function ID: 14867
// Name: SettingBlocklistStore
// Dependencies: [4627, 2]

// Module 14866 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 4627 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
