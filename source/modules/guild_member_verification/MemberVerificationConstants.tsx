// Module ID: 4617
// Function ID: 40255
// Name: items
// Dependencies: []

// Module 4617 (items)
const items = [{ field_type: require(dependencyMap[0]).VerificationFormFieldTypes.VERIFICATION }];
const items1 = [require(dependencyMap[0]).VerificationFormFieldTypes.TERMS];
const obj = { field_type: require(dependencyMap[0]).VerificationFormFieldTypes.VERIFICATION };
const items2 = [require(dependencyMap[0]).VerificationFormFieldTypes.MULTIPLE_CHOICE, require(dependencyMap[0]).VerificationFormFieldTypes.TEXT_INPUT, require(dependencyMap[0]).VerificationFormFieldTypes.PARAGRAPH];
const set = new Set(items1);
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild_member_verification/MemberVerificationConstants.tsx");

export const REQUIRED_FORM_FIELDS = items;
export const AUTOMATIC_APPROVAL_FORM_FIELDS = set;
export const MANUAL_APPROVAL_FORM_FIELDS = new Set(items2);
export const MAX_FORM_ELEMENTS = 5;
export const MAX_NUM_RULES = 16;
export const MAX_RULE_LENGTH = 300;
export const MAX_QUESTION_LENGTH = 300;
export const MAX_PLACEHOLDER_LENGTH = 150;
export const MAX_NUM_CHOICES = 8;
export const MAX_CHOICE_LENGTH = 150;
export const MAX_TEXT_RESPONSE_LENGTH = 150;
export const MAX_PARAGRAPH_RESPONSE_LENGTH = 1000;
export const MAX_DESCRIPTION_LENGTH = 300;
export const MEMBER_VERIFICATION_TYPE = "Membership Gating";
export const IN_APP_MEMBER_VERIFICATION_MODAL_KEY = "in-app-member-verification";
export const MemberVerificationModalStates = { VERIFICATION_INFO: "VERIFICATION_INFO" };
