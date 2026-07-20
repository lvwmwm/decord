// Module ID: 12089
// Function ID: 93241
// Name: isVirtualCurrencyEnabled
// Dependencies: [6, 7]
// Exports: isVirtualCurrencyEnabled, useVirtualCurrencyMobileEnabled

// Module 12089 (isVirtualCurrencyEnabled)
import _defineProperties from "_defineProperties";

const result = _defineProperties.fileFinishedImporting("modules/virtual_currency/hooks/native/useVirtualCurrencyMobileEnabled.tsx");

export const isVirtualCurrencyEnabled = function isVirtualCurrencyEnabled() {
  const obj = { enabled: !require(dependencyMap[0]).isMetaQuest() };
  return obj;
};
export const useVirtualCurrencyMobileEnabled = function useVirtualCurrencyMobileEnabled() {
  const obj = { enabled: !require(dependencyMap[0]).isMetaQuest() };
  return obj;
};
