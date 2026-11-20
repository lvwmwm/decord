// Module ID: 18431
// Function ID: 18432
// Name: conjurePlanDesign
// Dependencies: [6503, 4091, 18432, 1112, 2]
// Exports: conjurePlanDesignAlt, conjurePlanDesignSurface, conjurePlanReferenceImages

// Module 18431 (conjurePlanDesign)
import intl2 from "intl" /* 1112 */;
import _modDef4091 from "module_4091" /* 4091 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6503 */;
import conjurePlanTags from "conjurePlanTags" /* 18432 */;
import size from "module_2" /* 2 */;

const f114743 = (item) => {
  const obj = conjurePlanTags;
  return obj.planDeclaresSurface(proposal, item);
};
const CONJURE_PLAN_DESIGN_ALTS = {};
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.APP_CHANNEL] = _modDef4091["3/aHX6"];
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL] = _modDef4091["3/aHX6"];
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY] = _modDef4091["3/aHX6"];
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.OVERLAY] = _modDef4091["rPpf5/"];
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET] = null;
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD] = null;
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.BOT] = null;
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.APPLICATION_COMMANDS] = null;
const items = [ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY, ConjureProjectTypes.ConjureSupportedSurface.APP_CHANNEL, ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL, ConjureProjectTypes.ConjureSupportedSurface.OVERLAY];
const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanDesign.tsx");

export { CONJURE_PLAN_DESIGN_ALTS };
export function conjurePlanDesignSurface(experiences) {
  let closure_0 = experiences;
  let found = items.find(f114743);
  if (found == null) {
    found = null;
  }
  return found;
}
export function conjurePlanDesignAlt(proposal) {
  let obj;
  let prop;
  let closure_0 = proposal;
  let found = items.find(f114743);
  if (found == null) {
    found = null;
  }
  if (null == found) {
    prop = _modDef4091["3/aHX6"];
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
    const obj = { id: id.id, alt: intl.formatToPlainString(_modDef4091.xFgQ8L, obj2) };
    intl = intl2.intl;
    return obj;
  });
}
