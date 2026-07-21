// Module ID: 3948
// Function ID: 32619
// Name: isTermsFormField
// Dependencies: []
// Exports: hasNonTermsFormField

// Module 3948 (isTermsFormField)
function isTermsFormField(field_type) {
  let tmp = null != field_type;
  if (tmp) {
    tmp = field_type.field_type === obj.TERMS;
  }
  return tmp;
}
const obj = { TERMS: "TERMS", TEXT_INPUT: "TEXT_INPUT", PARAGRAPH: "PARAGRAPH", MULTIPLE_CHOICE: "MULTIPLE_CHOICE", VERIFICATION: "VERIFICATION" };
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/guild_member_verification/MemberVerificationTypes.tsx");

export const MAX_RESULTS_PER_PAGE = 25;
export const MAX_VISIBLE_PAGES = 4;
export const VerificationFormFieldTypes = obj;
export const UserVerificationFieldPlatforms = { EMAIL: "email", PHONE: "phone" };
export const GuildJoinRequestSortOrders = { TIMESTAMP_DESC: "NEWEST", TIMESTAMP_ASC: "OLDEST" };
export const GuildJoinRequestApplicationStatuses = { STARTED: "STARTED", SUBMITTED: "SUBMITTED", REJECTED: "REJECTED", APPROVED: "APPROVED" };
export { isTermsFormField };
export const hasNonTermsFormField = function hasNonTermsFormField(formFields) {
  return null != formFields && formFields.some((arg0) => !callback(arg0));
};
