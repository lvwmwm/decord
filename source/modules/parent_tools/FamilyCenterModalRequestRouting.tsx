// Module ID: 11087
// Function ID: 86281
// Name: getConnectionPrereqTarget
// Dependencies: [5, 6770, 6771, 2]
// Exports: resolveConnectionPrereqTarget

// Module 11087 (getConnectionPrereqTarget)
import asyncGeneratorStep from "asyncGeneratorStep";

function getConnectionPrereqTarget(teen_identity) {
  if ("ready" in teen_identity) {
    let obj = { section: frozen.REQUEST };
    obj = { teenIdentity: teen_identity.teen_identity };
    obj.params = obj;
    let tmp = obj;
  } else if ("invalid_link_code" in teen_identity) {
    const obj1 = { section: frozen.INVALID_CODE };
    tmp = obj1;
  } else if ("verified_teen_blocked" in teen_identity) {
    const obj2 = { section: frozen.MUST_BE_ADULT };
    tmp = obj2;
  } else if ("requires_adult_verification" in teen_identity) {
    obj = { section: frozen.CONFIRM_AGE };
    const obj3 = { teenIdentity: teen_identity.teen_identity };
    obj.params = obj3;
    tmp = obj;
  } else {
    tmp = obj;
  }
  return tmp;
}
function _resolveConnectionPrereqTarget() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const frozen = Object.freeze({ PREREQ_LOADING: "PREREQ_LOADING", CONFIRM_AGE: "CONFIRM_AGE", VERIFYING: "VERIFYING", REQUEST: "REQUEST", SENT: "SENT", ERROR: "ERROR", INVALID_CODE: "INVALID_CODE", MUST_BE_ADULT: "MUST_BE_ADULT", TEEN_SCAN: "TEEN_SCAN" });
obj = { section: frozen.ERROR, params: obj };
obj = { failureCode: require("items").FamilyCenterFailureCode.GENERIC_ERROR };
const result = require("maybeFetchCollectiblesForInvoices").fileFinishedImporting("modules/parent_tools/FamilyCenterModalRequestRouting.tsx");

export const FamilyCenterModalRequestSections = frozen;
export { getConnectionPrereqTarget };
export const resolveConnectionPrereqTarget = function resolveConnectionPrereqTarget(arg0, arg1) {
  return _resolveConnectionPrereqTarget(...arguments);
};
