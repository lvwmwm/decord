// Module ID: 6962
// Function ID: 6963
// Name: MemberVerificationUtils
// Dependencies: [6940, 1072, 5043, 1380, 2]
// Exports: guildHasVerificationGate, isAutomaticApprovalFormField, isManualApprovalFormField, isValidFormResponse, removeInternalFields

// Module 6962 (MemberVerificationUtils)
import Constants from "Constants" /* 1072 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 5043 */;
import MemberVerificationConstants from "MemberVerificationConstants" /* 6940 */;
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
