// Module ID: 12481
// Function ID: 12482
// Name: conjurePlanDesign
// Dependencies: [6809, 3863, 12482, 1125, 2]
// Exports: conjurePlanDesignAlt, conjurePlanDesignSurface, conjurePlanReferenceImages

// Module 12481 (conjurePlanDesign)
import intl2 from "intl" /* 1125 */;
import _modDef3863 from "module_3863" /* 3863 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6809 */;
import conjurePlanTags from "conjurePlanTags" /* 12482 */;
import size from "module_2" /* 2 */;

const f115469 = (item) => {
  const obj = conjurePlanTags;
  return obj.planDeclaresSurface(proposal, item);
};
const CONJURE_PLAN_DESIGN_ALTS = {};
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.APP_CHANNEL] = _modDef3863["3/aHX6"];
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL] = _modDef3863["3/aHX6"];
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY] = _modDef3863["3/aHX6"];
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.OVERLAY] = _modDef3863["rPpf5/"];
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET] = null;
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD] = null;
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.BOT] = null;
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.APPLICATION_COMMANDS] = null;
const items = [ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY, ConjureProjectTypes.ConjureSupportedSurface.APP_CHANNEL, ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL, ConjureProjectTypes.ConjureSupportedSurface.OVERLAY];
const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanDesign.tsx");

export { CONJURE_PLAN_DESIGN_ALTS };
export const conjurePlanDesignSurface = function conjurePlanDesignSurface(experiences) {
  let closure_0 = experiences;
  let found = items.find(f115469);
  if (found == null) {
    found = null;
  }
  return found;
};
export const conjurePlanDesignAlt = function conjurePlanDesignAlt(proposal) {
  let obj;
  let prop;
  let closure_0 = proposal;
  let found = items.find(f115469);
  if (found == null) {
    found = null;
  }
  if (null == found) {
    prop = _modDef3863["3/aHX6"];
  } else {
    prop = obj[found];
  }
  return prop;
};
export const conjurePlanReferenceImages = function conjurePlanReferenceImages(proposal) {
  let reference_images = proposal.reference_images;
  if (reference_images == null) {
    reference_images = [];
  }
  return reference_images.map((id, index) => {
    let intl;
    const obj = { id: id.id, alt: intl.formatToPlainString(_modDef3863.xFgQ8L, obj2) };
    intl = intl2.intl;
    return obj;
  });
};
