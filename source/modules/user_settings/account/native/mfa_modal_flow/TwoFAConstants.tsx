// Module ID: 13556
// Function ID: 102834
// Name: frozen
// Dependencies: []

// Module 13556 (frozen)
const AnalyticsSections = require(dependencyMap[0]).AnalyticsSections;
const frozen = Object.freeze({ LANDING: AnalyticsSections.IOS_TWO_FA_LANDING, SCAN: AnalyticsSections.IOS_TWO_FA_SCAN, ENTER_CODE: AnalyticsSections.IOS_TWO_FA_ENTER_CODE, SUCCESS: AnalyticsSections.IOS_TWO_FA_SUCCESS, ADD_SMS: AnalyticsSections.IOS_TWO_FA_ADD_SMS, VERIFY_SMS: AnalyticsSections.IOS_TWO_FA_VERIFY_SMS });
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFAConstants.tsx");

export const TwoFAModalSetupSections = frozen;
