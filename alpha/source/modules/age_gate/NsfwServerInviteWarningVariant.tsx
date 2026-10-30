// Module ID: 10111
// Function ID: 10112
// Name: NsfwServerInviteWarningVariant
// Dependencies: [1072, 6730, 1114, 10112, 6720, 10113, 2]
// Exports: getNsfwServerInviteWarningAgeGroupForError, getNsfwServerInviteWarningVariant, useGatedAgeGroup

// Module 10111 (NsfwServerInviteWarningVariant)
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1114 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6720 */;
import getTinyBroncoWarningDescriptions from "getTinyBroncoWarningDescriptions" /* 6730 */;
import useAgeGroupPresentation from "useAgeGroupPresentation" /* 10112 */;
import size from "module_2" /* 2 */;

const AbortCodes = Constants.AbortCodes;
const result = size.fileFinishedImporting("modules/age_gate/NsfwServerInviteWarningVariant.tsx");

export function getNsfwServerInviteWarningVariant(arg0) {
  let intl;
  let intl2;
  let obj4;
  const obj = getTinyBroncoWarningDescriptions;
  const tmp3 = obj.getTinyBroncoServerDescriptions()[arg0];
  const obj2 = { text: intl.string(intl3.t.FDSSia), joins: false };
  intl = intl3.intl;
  if (useAgeGroupPresentation.AgeGroupState.ADULT === arg0) {
    const obj3 = { description: tmp3, confirm: obj4, goBackIsPrimary: false };
    obj4 = { text: intl2.string(intl3.t.wVq7uo), joins: true };
    intl2 = tmp(1114).intl;
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
  const tmp3Result = tmp3(10113);
  if (tmp3Result.getIsInviteAcceptAgeGroupErrorsEnabled("invite_accept_error")) {
    tmp7 = UNVERIFIED;
  }
  return tmp7;
}
