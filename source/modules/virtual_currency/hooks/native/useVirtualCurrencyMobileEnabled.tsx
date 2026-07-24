// Module ID: 12241
// Function ID: 95693
// Name: isVirtualCurrencyEnabled
// Dependencies: [1553, 2]
// Exports: isVirtualCurrencyEnabled, useVirtualCurrencyMobileEnabled

// Module 12241 (isVirtualCurrencyEnabled)
const result = require("set").fileFinishedImporting("modules/virtual_currency/hooks/native/useVirtualCurrencyMobileEnabled.tsx");

export const isVirtualCurrencyEnabled = function isVirtualCurrencyEnabled() {
  const obj = { enabled: !require(1553) /* isMetaQuest */.isMetaQuest() };
  return obj;
};
export const useVirtualCurrencyMobileEnabled = function useVirtualCurrencyMobileEnabled() {
  const obj = { enabled: !require(1553) /* isMetaQuest */.isMetaQuest() };
  return obj;
};
