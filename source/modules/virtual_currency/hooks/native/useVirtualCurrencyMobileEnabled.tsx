// Module ID: 12403
// Function ID: 12404
// Name: isVirtualCurrencyEnabled
// Dependencies: [1577, 2]
// Exports: isVirtualCurrencyEnabled, useVirtualCurrencyMobileEnabled

// Module 12403 (isVirtualCurrencyEnabled)
const result = require("set").fileFinishedImporting("modules/virtual_currency/hooks/native/useVirtualCurrencyMobileEnabled.tsx");

export const isVirtualCurrencyEnabled = function isVirtualCurrencyEnabled() {
  const obj = { enabled: null };
  obj[0] = !require(1577) /* isMetaQuest */.isMetaQuest();
  return obj;
};
export const useVirtualCurrencyMobileEnabled = function useVirtualCurrencyMobileEnabled() {
  const obj = { enabled: null };
  obj[0] = !require(1577) /* isMetaQuest */.isMetaQuest();
  return obj;
};
