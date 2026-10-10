// Module ID: 13038
// Function ID: 13039
// Name: useVirtualCurrencyMobileEnabled
// Dependencies: [1628, 2]
// Exports: isVirtualCurrencyEnabled, useVirtualCurrencyMobileEnabled

// Module 13038 (useVirtualCurrencyMobileEnabled)
import MetaQuestUtils from "MetaQuestUtils" /* 1628 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/virtual_currency/hooks/native/useVirtualCurrencyMobileEnabled.tsx");

export const isVirtualCurrencyEnabled = function isVirtualCurrencyEnabled() {
  let obj2;
  const obj = { enabled: !obj2.isMetaQuest() };
  obj2 = MetaQuestUtils;
  return obj;
};
export const useVirtualCurrencyMobileEnabled = function useVirtualCurrencyMobileEnabled() {
  let obj2;
  const obj = { enabled: !obj2.isMetaQuest() };
  obj2 = MetaQuestUtils;
  return obj;
};
