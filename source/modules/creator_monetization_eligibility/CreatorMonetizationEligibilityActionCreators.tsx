// Module ID: 16247
// Function ID: 125518
// Name: _createCreatorMonetizationEnableRequest
// Dependencies: []
// Exports: acceptCreatorMonetizationTerms, acceptCreatorMonetizationTermsV2, acceptNewTerms, acceptNewTermsDemonetized, createCreatorMonetizationEnableRequest, getCreatorMonetizationEligibility, getCreatorMonetizationOnboardingMarketing, ownershipTransferOnboard, removeMonetization

// Module 16247 (_createCreatorMonetizationEnableRequest)
function _createCreatorMonetizationEnableRequest() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _createCreatorMonetizationEnableRequest = obj;
  return obj(...arguments);
}
function _getCreatorMonetizationEligibility() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _getCreatorMonetizationEligibility = obj;
  return obj(...arguments);
}
function _acceptCreatorMonetizationTerms() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _acceptCreatorMonetizationTerms = obj;
  return obj(...arguments);
}
function _acceptCreatorMonetizationTermsV() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _acceptCreatorMonetizationTermsV = obj;
  return obj(...arguments);
}
function _getCreatorMonetizationOnboardingMarketing() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _getCreatorMonetizationOnboardingMarketing = obj;
  return obj(...arguments);
}
function _ownershipTransferOnboard() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _ownershipTransferOnboard = obj;
  return obj(...arguments);
}
function _requestRemoveMonetization() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _requestRemoveMonetization = obj;
  return obj(...arguments);
}
function _removeMonetization() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _removeMonetization = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
const Endpoints = arg1(dependencyMap[1]).Endpoints;
const ApplicationTypes = arg1(dependencyMap[2]).ApplicationTypes;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/creator_monetization_eligibility/CreatorMonetizationEligibilityActionCreators.tsx");

export const createCreatorMonetizationEnableRequest = function createCreatorMonetizationEnableRequest(arg0) {
  return _createCreatorMonetizationEnableRequest(...arguments);
};
export const getCreatorMonetizationEligibility = function getCreatorMonetizationEligibility(arg0) {
  return _getCreatorMonetizationEligibility(...arguments);
};
export const acceptCreatorMonetizationTerms = function acceptCreatorMonetizationTerms(arg0, arg1) {
  return _acceptCreatorMonetizationTerms(...arguments);
};
export const acceptCreatorMonetizationTermsV2 = function acceptCreatorMonetizationTermsV2(arg0) {
  return _acceptCreatorMonetizationTermsV(...arguments);
};
export const getCreatorMonetizationOnboardingMarketing = function getCreatorMonetizationOnboardingMarketing(arg0) {
  return _getCreatorMonetizationOnboardingMarketing(...arguments);
};
export const ownershipTransferOnboard = function ownershipTransferOnboard() {
  return _ownershipTransferOnboard(...arguments);
};
export const acceptNewTerms = function acceptNewTerms(arg0) {
  const HTTP = arg1(dependencyMap[3]).HTTP;
  const obj = { url: Endpoints.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(arg0), rejectWithError: arg1(dependencyMap[3]).rejectWithMigratedError() };
  return HTTP.post(obj);
};
export const acceptNewTermsDemonetized = function acceptNewTermsDemonetized(arg0) {
  const HTTP = arg1(dependencyMap[3]).HTTP;
  const obj = { url: Endpoints.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(arg0), rejectWithError: arg1(dependencyMap[3]).rejectWithMigratedError() };
  return HTTP.post(obj);
};
export const removeMonetization = function removeMonetization() {
  return _removeMonetization(...arguments);
};
