// Module ID: 16603
// Function ID: 16604
// Name: TwoFAConstants
// Dependencies: [1072, 2]

// Module 16603 (TwoFAConstants)
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const AnalyticsSections = Constants.AnalyticsSections;
const obj = { LANDING: AnalyticsSections.IOS_TWO_FA_LANDING, SCAN: AnalyticsSections.IOS_TWO_FA_SCAN, ENTER_CODE: AnalyticsSections.IOS_TWO_FA_ENTER_CODE, SUCCESS: AnalyticsSections.IOS_TWO_FA_SUCCESS, ADD_SMS: AnalyticsSections.IOS_TWO_FA_ADD_SMS, VERIFY_SMS: AnalyticsSections.IOS_TWO_FA_VERIFY_SMS };
const frozen = Object.freeze(obj);
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFAConstants.tsx");

export const TwoFAModalSetupSections = frozen;
