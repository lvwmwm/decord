// Module ID: 12290
// Function ID: 12291
// Name: isVirtualCurrencyEnabled
// Dependencies: [1624, 2]
// Exports: isVirtualCurrencyEnabled, useVirtualCurrencyMobileEnabled

// Module 12290 (isVirtualCurrencyEnabled)
const result = require("set").fileFinishedImporting("modules/virtual_currency/hooks/native/useVirtualCurrencyMobileEnabled.tsx");

export const isVirtualCurrencyEnabled = function isVirtualCurrencyEnabled() {
  const obj = { enabled: null };
  obj[0] = !require(1624) /* isMetaQuest */.isMetaQuest();
  return obj;
};
export const useVirtualCurrencyMobileEnabled = function useVirtualCurrencyMobileEnabled() {
  const obj = { enabled: null };
  obj[0] = !require(1624) /* isMetaQuest */.isMetaQuest();
  return obj;
};
