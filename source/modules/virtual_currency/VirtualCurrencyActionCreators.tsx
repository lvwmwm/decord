// Module ID: 8766
// Function ID: 69269
// Name: fetchVirtualCurrencyBalance
// Dependencies: [5, 4175, 653, 3, 686, 507, 4029, 7369, 1184, 2]
// Exports: redeemVirtualCurrencyForSKU, setBalancePillOverlay

// Module 8766 (fetchVirtualCurrencyBalance)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { Endpoints } from "ME";
import importDefaultResult from "timestamp";

const require = arg1;
function fetchVirtualCurrencyBalance() {
  return _fetchVirtualCurrencyBalance(...arguments);
}
function _fetchVirtualCurrencyBalance() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _redeemVirtualCurrencyForSKU() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
importDefaultResult = new importDefaultResult("VirtualCurrencyActionCreators");
const result = require("ME").fileFinishedImporting("modules/virtual_currency/VirtualCurrencyActionCreators.tsx");

export { fetchVirtualCurrencyBalance };
export const redeemVirtualCurrencyForSKU = function redeemVirtualCurrencyForSKU(arg0) {
  return _redeemVirtualCurrencyForSKU(...arguments);
};
export const setBalancePillOverlay = function setBalancePillOverlay(balancePillOverlay) {
  let obj = importDefault(686);
  obj = { type: "VIRTUAL_CURRENCY_SET_BALANCE_PILL_OVERLAY", balancePillOverlay };
  return obj.dispatch(obj);
};
