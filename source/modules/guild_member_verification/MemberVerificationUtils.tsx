// Module ID: 4620
// Function ID: 40292
// Name: isValidFormResponse
// Dependencies: [4621, 653, 3950, 1327, 2]
// Exports: guildHasVerificationGate, isAutomaticApprovalFormField, isManualApprovalFormField, isValidFormResponse, removeInternalFields

// Module 4620 (isValidFormResponse)
import items from "items";
import { GuildFeatures } from "ME";

let closure_2;
let closure_3;
({ AUTOMATIC_APPROVAL_FORM_FIELDS: closure_2, MANUAL_APPROVAL_FORM_FIELDS: closure_3 } = items);
const result = require("isTermsFormField").fileFinishedImporting("modules/guild_member_verification/MemberVerificationUtils.tsx");

export const isValidFormResponse = function isValidFormResponse(required) {
  let field_type;
  let response;
  ({ response, field_type } = required);
  if (required.required) {
    if (null == response) {
      return false;
    } else {
      if (require(3950) /* isTermsFormField */.VerificationFormFieldTypes.TERMS !== field_type) {
        if (require(3950) /* isTermsFormField */.VerificationFormFieldTypes.VERIFICATION !== field_type) {
          if (require(3950) /* isTermsFormField */.VerificationFormFieldTypes.TEXT_INPUT !== field_type) {
            if (require(3950) /* isTermsFormField */.VerificationFormFieldTypes.PARAGRAPH !== field_type) {
              if (require(3950) /* isTermsFormField */.VerificationFormFieldTypes.MULTIPLE_CHOICE === field_type) {
                return "number" === typeof response;
              } else {
                return require(1327) /* isDiscordFrontendDevelopment */.assertNever(field_type);
              }
            }
          }
          let tmp8 = "string" === typeof response;
          if (tmp8) {
            tmp8 = "" !== response.trim();
          }
          return tmp8;
        }
      }
      const _Boolean = Boolean;
      return Boolean(response);
    }
  } else {
    return true;
  }
};
export const removeInternalFields = function removeInternalFields(arr) {
  return arr.filter((field_type) => field_type.field_type !== outer1_0(outer1_1[2]).VerificationFormFieldTypes.VERIFICATION);
};
export const isAutomaticApprovalFormField = function isAutomaticApprovalFormField(field_type) {
  field_type = undefined;
  if (null != field_type) {
    field_type = field_type.field_type;
  }
  return set.has(field_type);
};
export const isManualApprovalFormField = function isManualApprovalFormField(field_type) {
  field_type = undefined;
  if (null != field_type) {
    field_type = field_type.field_type;
  }
  return set2.has(field_type);
};
export const guildHasVerificationGate = function guildHasVerificationGate(guild) {
  let hasItem = null != guild;
  if (hasItem) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED);
  }
  return hasItem;
};
