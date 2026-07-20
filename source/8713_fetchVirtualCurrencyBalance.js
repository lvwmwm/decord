// Module ID: 8713
// Function ID: 68975
// Name: fetchVirtualCurrencyBalance
// Dependencies: []
// Exports: redeemVirtualCurrencyForSKU, setBalancePillOverlay

// Module 8713 (fetchVirtualCurrencyBalance)
function fetchVirtualCurrencyBalance() {
  return _fetchVirtualCurrencyBalance(...arguments);
}
function _fetchVirtualCurrencyBalance() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchVirtualCurrencyBalance = obj;
  return obj(...arguments);
}
function _redeemVirtualCurrencyForSKU() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _redeemVirtualCurrencyForSKU = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const Endpoints = arg1(dependencyMap[2]).Endpoints;
let importDefaultResult = importDefault(dependencyMap[3]);
importDefaultResult = new importDefaultResult("VirtualCurrencyActionCreators");
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/virtual_currency/VirtualCurrencyActionCreators.tsx");

export { fetchVirtualCurrencyBalance };
export const redeemVirtualCurrencyForSKU = function redeemVirtualCurrencyForSKU(arg0) {
  return _redeemVirtualCurrencyForSKU(...arguments);
};
export const setBalancePillOverlay = function setBalancePillOverlay(balancePillOverlay) {
  let obj = importDefault(dependencyMap[4]);
  obj = { type: "VIRTUAL_CURRENCY_SET_BALANCE_PILL_OVERLAY", balancePillOverlay };
  return obj.dispatch(obj);
};
