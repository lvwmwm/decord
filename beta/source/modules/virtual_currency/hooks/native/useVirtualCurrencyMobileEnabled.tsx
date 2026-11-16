// Module ID: 15948
// Function ID: 15949
// Name: useVirtualCurrencyMobileEnabled
// Dependencies: [1627, 2]
// Exports: isVirtualCurrencyEnabled, useVirtualCurrencyMobileEnabled

// Module 15948 (useVirtualCurrencyMobileEnabled)
import MetaQuestUtils from "MetaQuestUtils" /* 1627 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/virtual_currency/hooks/native/useVirtualCurrencyMobileEnabled.tsx");

export function isVirtualCurrencyEnabled() {
  let obj2;
  const obj = { enabled: !obj2.isMetaQuest() };
  obj2 = MetaQuestUtils;
  return obj;
}
export function useVirtualCurrencyMobileEnabled() {
  let obj2;
  const obj = { enabled: !obj2.isMetaQuest() };
  obj2 = MetaQuestUtils;
  return obj;
}
