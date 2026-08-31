// Module ID: 12776
// Function ID: 12777
// Name: isVirtualCurrencyEnabled
// Dependencies: [1624, 2]
// Exports: isVirtualCurrencyEnabled, useVirtualCurrencyMobileEnabled

// Module 12776 (isVirtualCurrencyEnabled)
import set from "set" /* 2 */;
import isMetaQuest from "isMetaQuest" /* 1624 */;

const result = set.fileFinishedImporting("modules/virtual_currency/hooks/native/useVirtualCurrencyMobileEnabled.tsx");

export const isVirtualCurrencyEnabled = function isVirtualCurrencyEnabled() {
  const obj = { enabled: !isMetaQuest.isMetaQuest() };
  return obj;
};
export const useVirtualCurrencyMobileEnabled = function useVirtualCurrencyMobileEnabled() {
  const obj = { enabled: !isMetaQuest.isMetaQuest() };
  return obj;
};
