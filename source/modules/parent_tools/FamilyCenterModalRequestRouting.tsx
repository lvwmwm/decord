// Module ID: 11050
// Function ID: 86042
// Name: getConnectionPrereqTarget
// Dependencies: []
// Exports: resolveConnectionPrereqTarget

// Module 11050 (getConnectionPrereqTarget)
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
  const _resolveConnectionPrereqTarget = obj;
  return obj(...arguments);
}
let closure_2 = importDefault(dependencyMap[0]);
const frozen = Object.freeze({});
let obj = { section: frozen.ERROR, params: obj };
obj = { failureCode: arg1(dependencyMap[1]).FamilyCenterFailureCode.GENERIC_ERROR };
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/parent_tools/FamilyCenterModalRequestRouting.tsx");

export const FamilyCenterModalRequestSections = frozen;
export { getConnectionPrereqTarget };
export const resolveConnectionPrereqTarget = function resolveConnectionPrereqTarget(arg0, arg1) {
  return _resolveConnectionPrereqTarget(...arguments);
};
