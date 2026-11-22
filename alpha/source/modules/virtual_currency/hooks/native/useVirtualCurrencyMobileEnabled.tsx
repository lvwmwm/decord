// Module ID: 14704
// Function ID: 14705
// Name: useVirtualCurrencyMobileEnabled
// Dependencies: [1625, 2]
// Exports: isVirtualCurrencyEnabled, useVirtualCurrencyMobileEnabled

// Module 14704 (useVirtualCurrencyMobileEnabled)
import MetaQuestUtils from "MetaQuestUtils" /* 1625 */;
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
