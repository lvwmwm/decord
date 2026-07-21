// Module ID: 4617
// Function ID: 40241
// Name: isValidFormResponse
// Dependencies: []
// Exports: guildHasVerificationGate, isAutomaticApprovalFormField, isManualApprovalFormField, isValidFormResponse, removeInternalFields

// Module 4617 (isValidFormResponse)
const _module = require(dependencyMap[0]);
({ AUTOMATIC_APPROVAL_FORM_FIELDS: closure_2, MANUAL_APPROVAL_FORM_FIELDS: closure_3 } = _module);
const GuildFeatures = require(dependencyMap[1]).GuildFeatures;
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/guild_member_verification/MemberVerificationUtils.tsx");

export const isValidFormResponse = function isValidFormResponse(required) {
  let field_type;
  let response;
  ({ response, field_type } = required);
  if (required.required) {
    if (null == response) {
      return false;
    } else {
      if (require(dependencyMap[2]).VerificationFormFieldTypes.TERMS !== field_type) {
        if (require(dependencyMap[2]).VerificationFormFieldTypes.VERIFICATION !== field_type) {
          if (require(dependencyMap[2]).VerificationFormFieldTypes.TEXT_INPUT !== field_type) {
            if (require(dependencyMap[2]).VerificationFormFieldTypes.PARAGRAPH !== field_type) {
              if (require(dependencyMap[2]).VerificationFormFieldTypes.MULTIPLE_CHOICE === field_type) {
                return "number" === typeof response;
              } else {
                return require(dependencyMap[3]).assertNever(field_type);
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
  return arr.filter((field_type) => field_type.field_type !== callback(closure_1[2]).VerificationFormFieldTypes.VERIFICATION);
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
