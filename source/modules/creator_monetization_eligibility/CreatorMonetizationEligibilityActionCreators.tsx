// Module ID: 16427
// Function ID: 128119
// Name: _createCreatorMonetizationEnableRequest
// Dependencies: [5, 653, 4156, 507, 686, 5463, 2]
// Exports: acceptCreatorMonetizationTerms, acceptCreatorMonetizationTermsV2, acceptNewTerms, acceptNewTermsDemonetized, createCreatorMonetizationEnableRequest, getCreatorMonetizationEligibility, getCreatorMonetizationOnboardingMarketing, ownershipTransferOnboard, removeMonetization

// Module 16427 (_createCreatorMonetizationEnableRequest)
import fetchApplication from "fetchApplication";
import { Endpoints } from "ME";
import { ApplicationTypes } from "ApplicationTypes";

const require = arg1;
function _createCreatorMonetizationEnableRequest() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _getCreatorMonetizationEligibility() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _acceptCreatorMonetizationTerms() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _acceptCreatorMonetizationTermsV() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _getCreatorMonetizationOnboardingMarketing() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _ownershipTransferOnboard() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _requestRemoveMonetization() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _removeMonetization() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("ApplicationTypes").fileFinishedImporting("modules/creator_monetization_eligibility/CreatorMonetizationEligibilityActionCreators.tsx");

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
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  const obj = { url: Endpoints.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(arg0), rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
  return HTTP.post(obj);
};
export const acceptNewTermsDemonetized = function acceptNewTermsDemonetized(arg0) {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  const obj = { url: Endpoints.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(arg0), rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
  return HTTP.post(obj);
};
export const removeMonetization = function removeMonetization() {
  return _removeMonetization(...arguments);
};
