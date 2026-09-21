// Module ID: 14849
// Function ID: 14850
// Name: SettingBlocklistStore
// Dependencies: [4629, 2]

// Module 14849 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 4629 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
