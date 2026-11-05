// Module ID: 12950
// Function ID: 12951
// Name: conjurePlanDesign
// Dependencies: [6983, 3995, 12951, 1113, 2]
// Exports: conjurePlanDesignAlt, conjurePlanDesignSurface, conjurePlanReferenceImages

// Module 12950 (conjurePlanDesign)
import intl2 from "intl" /* 1113 */;
import _modDef3995 from "module_3995" /* 3995 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6983 */;
import conjurePlanTags from "conjurePlanTags" /* 12951 */;
import size from "module_2" /* 2 */;

const f103966 = (item) => {
  const obj = conjurePlanTags;
  return obj.planDeclaresSurface(proposal, item);
};
const CONJURE_PLAN_DESIGN_ALTS = {};
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.APP_CHANNEL] = _modDef3995["3/aHX6"];
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL] = _modDef3995["3/aHX6"];
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY] = _modDef3995["3/aHX6"];
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.OVERLAY] = _modDef3995["rPpf5/"];
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET] = null;
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD] = null;
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.BOT] = null;
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.APPLICATION_COMMANDS] = null;
const items = [ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY, ConjureProjectTypes.ConjureSupportedSurface.APP_CHANNEL, ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL, ConjureProjectTypes.ConjureSupportedSurface.OVERLAY];
const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanDesign.tsx");

export { CONJURE_PLAN_DESIGN_ALTS };
export function conjurePlanDesignSurface(experiences) {
  let closure_0 = experiences;
  let found = items.find(f103966);
  if (found == null) {
    found = null;
  }
  return found;
}
export function conjurePlanDesignAlt(proposal) {
  let obj;
  let prop;
  let closure_0 = proposal;
  let found = items.find(f103966);
  if (found == null) {
    found = null;
  }
  if (null == found) {
    prop = _modDef3995["3/aHX6"];
  } else {
    prop = obj[found];
  }
  return prop;
}
export function conjurePlanReferenceImages(proposal) {
  let reference_images = proposal.reference_images;
  if (reference_images == null) {
    reference_images = [];
  }
  return reference_images.map((id, index) => {
    let intl;
    const obj = { id: id.id, alt: intl.formatToPlainString(_modDef3995.xFgQ8L, obj2) };
    intl = intl2.intl;
    return obj;
  });
}
