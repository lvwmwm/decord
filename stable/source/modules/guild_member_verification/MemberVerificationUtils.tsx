// Module ID: 5139
// Function ID: 5140
// Name: MemberVerificationUtils
// Dependencies: [5140, 1074, 4461, 1369, 2]
// Exports: guildHasVerificationGate, isAutomaticApprovalFormField, isManualApprovalFormField, isValidFormResponse, removeInternalFields

// Module 5139 (MemberVerificationUtils)
import Constants from "Constants" /* 1074 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4461 */;
import MemberVerificationConstants from "MemberVerificationConstants" /* 5140 */;
import size from "module_2" /* 2 */;

({ AUTOMATIC_APPROVAL_FORM_FIELDS: c2, MANUAL_APPROVAL_FORM_FIELDS: c3 } = MemberVerificationConstants);
const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/guild_member_verification/MemberVerificationUtils.tsx");

export const isValidFormResponse = function isValidFormResponse(required) {
  ({ response, field_type } = required);
  if (required.required) {
    if (null == response) {
      return false;
    } else {
      if (MemberVerificationTypes.VerificationFormFieldTypes.TERMS !== field_type) {
        if (tmp4(4461).VerificationFormFieldTypes.VERIFICATION !== field_type) {
          if (tmp4(4461).VerificationFormFieldTypes.TEXT_INPUT !== field_type) {
            if (tmp4(4461).VerificationFormFieldTypes.PARAGRAPH !== field_type) {
              if (tmp4(4461).VerificationFormFieldTypes.MULTIPLE_CHOICE === field_type) {
                return typeof response === "number";
              } else {
                return tmp4(1369).assertNever(field_type);
              }
            }
          }
          let tmp2 = typeof response === "string";
          if (typeof response === "string") {
            tmp2 = "" !== response.trim();
          }
          return tmp2;
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
  return arr.filter((field_type) => field_type.field_type !== MemberVerificationTypes.VerificationFormFieldTypes.VERIFICATION);
};
export const isAutomaticApprovalFormField = function isAutomaticApprovalFormField(field_type) {
  field_type = undefined;
  if (field_type != null) {
    field_type = field_type.field_type;
  }
  return set.has(field_type);
};
export const isManualApprovalFormField = function isManualApprovalFormField(field_type) {
  field_type = undefined;
  if (field_type != null) {
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
