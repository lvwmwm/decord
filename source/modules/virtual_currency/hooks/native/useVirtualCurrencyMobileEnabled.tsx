// Module ID: 12741
// Function ID: 12742
// Name: isVirtualCurrencyEnabled
// Dependencies: [1625, 2]
// Exports: isVirtualCurrencyEnabled, useVirtualCurrencyMobileEnabled

// Module 12741 (isVirtualCurrencyEnabled)
import set from "set" /* 2 */;
import isMetaQuest from "isMetaQuest" /* 1625 */;

const result = set.fileFinishedImporting("modules/virtual_currency/hooks/native/useVirtualCurrencyMobileEnabled.tsx");

export const isVirtualCurrencyEnabled = function isVirtualCurrencyEnabled() {
  const obj = { enabled: !isMetaQuest.isMetaQuest() };
  return obj;
};
export const useVirtualCurrencyMobileEnabled = function useVirtualCurrencyMobileEnabled() {
  const obj = { enabled: !isMetaQuest.isMetaQuest() };
  return obj;
};
