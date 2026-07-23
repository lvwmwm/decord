// Module ID: 3950
// Function ID: 32626
// Name: isTermsFormField
// Dependencies: [2]
// Exports: hasNonTermsFormField

// Module 3950 (isTermsFormField)
function isTermsFormField(field_type) {
  let tmp = null != field_type;
  if (tmp) {
    tmp = field_type.field_type === obj.TERMS;
  }
  return tmp;
}
const obj = { TERMS: "TERMS", TEXT_INPUT: "TEXT_INPUT", PARAGRAPH: "PARAGRAPH", MULTIPLE_CHOICE: "MULTIPLE_CHOICE", VERIFICATION: "VERIFICATION" };
const result = require("set").fileFinishedImporting("modules/guild_member_verification/MemberVerificationTypes.tsx");

export const MAX_RESULTS_PER_PAGE = 25;
export const MAX_VISIBLE_PAGES = 4;
export const VerificationFormFieldTypes = obj;
export const UserVerificationFieldPlatforms = { EMAIL: "email", PHONE: "phone" };
export const GuildJoinRequestSortOrders = { TIMESTAMP_DESC: "NEWEST", TIMESTAMP_ASC: "OLDEST" };
export const GuildJoinRequestApplicationStatuses = { STARTED: "STARTED", SUBMITTED: "SUBMITTED", REJECTED: "REJECTED", APPROVED: "APPROVED" };
export { isTermsFormField };
export const hasNonTermsFormField = function hasNonTermsFormField(formFields) {
  return null != formFields && formFields.some((arg0) => !outer1_1(arg0));
};
