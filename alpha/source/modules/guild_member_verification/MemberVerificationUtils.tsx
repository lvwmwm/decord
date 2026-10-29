// Module ID: 6954
// Function ID: 6955
// Name: MemberVerificationUtils
// Dependencies: [6933, 1084, 5039, 1385, 2]
// Exports: guildHasVerificationGate, isAutomaticApprovalFormField, isManualApprovalFormField, isValidFormResponse, removeInternalFields

// Module 6954 (MemberVerificationUtils)
import Constants from "Constants" /* 1084 */;
import GlobalUtils from "GlobalUtils" /* 1385 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 5039 */;
import MemberVerificationConstants from "MemberVerificationConstants" /* 6933 */;
import size from "module_2" /* 2 */;

let has;

let c2;
let c3;
({ AUTOMATIC_APPROVAL_FORM_FIELDS: c2, MANUAL_APPROVAL_FORM_FIELDS: c3 } = MemberVerificationConstants);
const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/guild_member_verification/MemberVerificationUtils.tsx");

export function isValidFormResponse(required) {
  let field_type;
  let response;
  ({ response, field_type } = required);
  if (required.required) {
    if (null == response) {
      return false;
    } else {
      if (MemberVerificationTypes.VerificationFormFieldTypes.TERMS !== field_type) {
        if (MemberVerificationTypes.VerificationFormFieldTypes.VERIFICATION !== field_type) {
          if (MemberVerificationTypes.VerificationFormFieldTypes.TEXT_INPUT !== field_type) {
            if (MemberVerificationTypes.VerificationFormFieldTypes.PARAGRAPH !== field_type) {
              if (MemberVerificationTypes.VerificationFormFieldTypes.MULTIPLE_CHOICE === field_type) {
                return typeof response === "number";
              } else {
                const tmp4Result = GlobalUtils;
                return tmp4Result.assertNever(field_type);
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
}
export function removeInternalFields(arr) {
  return arr.filter((field_type) => field_type.field_type !== MemberVerificationTypes.VerificationFormFieldTypes.VERIFICATION);
}
export function isAutomaticApprovalFormField(field_type) {
  field_type = undefined;
  has = has.has;
  if (field_type != null) {
    field_type = field_type.field_type;
  }
  return has(field_type);
}
export function isManualApprovalFormField(field_type) {
  field_type = undefined;
  has = has2.has;
  if (field_type != null) {
    field_type = field_type.field_type;
  }
  return has(field_type);
}
export function guildHasVerificationGate(guild) {
  let hasItem = null != guild;
  if (hasItem) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED);
  }
  return hasItem;
}
