// Module ID: 11044
// Function ID: 85997
// Name: getConnectionPrereqTarget
// Dependencies: []
// Exports: resolveConnectionPrereqTarget

// Module 11044 (getConnectionPrereqTarget)
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
const frozen = Object.freeze({ content: true, style: "/assets/design/components/Icon/native/redesign/generated/images", variant: 24, borderWidth: 24, borderBottomWidth: null, borderColor: "88b9e4c8788e9863c575add881967ca5", borderBottomColor: "LinkExternalSmallIcon", canShowOnboarding: "png", canShowBotsBanner: "absolute" });
let obj = { section: frozen.ERROR, params: obj };
obj = { failureCode: arg1(dependencyMap[1]).FamilyCenterFailureCode.GENERIC_ERROR };
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/parent_tools/FamilyCenterModalRequestRouting.tsx");

export const FamilyCenterModalRequestSections = frozen;
export { getConnectionPrereqTarget };
export const resolveConnectionPrereqTarget = function resolveConnectionPrereqTarget(arg0, arg1) {
  return _resolveConnectionPrereqTarget(...arguments);
};
