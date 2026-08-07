// Module ID: 12152
// Function ID: 12153
// Name: isVirtualCurrencyEnabled
// Dependencies: [1605, 2]
// Exports: isVirtualCurrencyEnabled, useVirtualCurrencyMobileEnabled

// Module 12152 (isVirtualCurrencyEnabled)
const result = require("set").fileFinishedImporting("modules/virtual_currency/hooks/native/useVirtualCurrencyMobileEnabled.tsx");

export const isVirtualCurrencyEnabled = function isVirtualCurrencyEnabled() {
  const obj = { enabled: null };
  obj[0] = !require(1605) /* isMetaQuest */.isMetaQuest();
  return obj;
};
export const useVirtualCurrencyMobileEnabled = function useVirtualCurrencyMobileEnabled() {
  const obj = { enabled: null };
  obj[0] = !require(1605) /* isMetaQuest */.isMetaQuest();
  return obj;
};
