// Module ID: 10530
// Function ID: 10531
// Name: NsfwServerInviteWarningVariant
// Dependencies: [1071, 6421, 1112, 10531, 6411, 10532, 2]
// Exports: getNsfwServerInviteWarningAgeGroupForError, getNsfwServerInviteWarningVariant, useGatedAgeGroup

// Module 10530 (NsfwServerInviteWarningVariant)
import Constants from "Constants" /* 1071 */;
import intl3 from "intl" /* 1112 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6411 */;
import getAgeNoticeWarningDescriptions from "getAgeNoticeWarningDescriptions" /* 6421 */;
import useAgeGroupPresentation from "useAgeGroupPresentation" /* 10531 */;
import size from "module_2" /* 2 */;

const AbortCodes = Constants.AbortCodes;
const result = size.fileFinishedImporting("modules/age_gate/NsfwServerInviteWarningVariant.tsx");

export function getNsfwServerInviteWarningVariant(arg0) {
  let intl;
  let intl2;
  let obj4;
  const obj = getAgeNoticeWarningDescriptions;
  const tmp3 = obj.getAgeNoticeServerDescriptions()[arg0];
  const obj2 = { text: intl.string(intl3.t.FDSSia), joins: false };
  intl = intl3.intl;
  if (useAgeGroupPresentation.AgeGroupState.ADULT === arg0) {
    const obj3 = { description: tmp3, confirm: obj4, goBackIsPrimary: false };
    obj4 = { text: intl2.string(intl3.t.wVq7uo), joins: true };
    intl2 = tmp(1112).intl;
    return obj3;
  } else if (useAgeGroupPresentation.AgeGroupState.TEEN === arg0) {
    return { description: tmp3, confirm: obj2, goBackIsPrimary: true };
  } else if (useAgeGroupPresentation.AgeGroupState.UNVERIFIED === arg0) {
    return { description: tmp3, confirm: obj2, goBackIsPrimary: false };
  }
}
export function useGatedAgeGroup() {
  let TEEN;
  const obj = AgeVerificationUtils;
  const isVerifiedTeen = obj.useIsVerifiedTeen();
  const obj2 = AgeVerificationUtils;
  const isVerifiedAdult = obj2.useIsVerifiedAdult();
  const AgeGroupState = useAgeGroupPresentation.AgeGroupState;
  if (isVerifiedTeen) {
    TEEN = AgeGroupState.TEEN;
  } else {
    TEEN = isVerifiedAdult ? AgeGroupState.ADULT : AgeGroupState.UNVERIFIED;
  }
  return TEEN;
}
export function getNsfwServerInviteWarningAgeGroupForError(arg0) {
  let UNVERIFIED;
  let tmp3;
  if (AbortCodes.UNDER_MINIMUM_AGE === arg0) {
    UNVERIFIED = useAgeGroupPresentation.AgeGroupState.TEEN;
    tmp3 = require;
  } else if (tmp.AGE_GROUP_UNVERIFIED === arg0) {
    tmp3 = require;
    UNVERIFIED = useAgeGroupPresentation.AgeGroupState.UNVERIFIED;
  } else {
    return null;
  }
  let tmp7 = null;
  const tmp3Result = tmp3(10532);
  if (tmp3Result.getIsInviteAcceptAgeGroupErrorsEnabled("invite_accept_error")) {
    tmp7 = UNVERIFIED;
  }
  return tmp7;
}
