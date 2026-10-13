// Module ID: 11909
// Function ID: 11910
// Name: conjurePlanDesign
// Dependencies: [6947, 3849, 11901, 2]
// Exports: conjurePlanDesignAlt, conjurePlanDesignSurface

// Module 11909 (conjurePlanDesign)
import _modDef3849 from "module_3849" /* 3849 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6947 */;
import conjurePlanTags from "conjurePlanTags" /* 11901 */;
import size from "module_2" /* 2 */;

const f111020 = (item) => {
  const obj = conjurePlanTags;
  return obj.planDeclaresSurface(proposal, item);
};
const CONJURE_PLAN_DESIGN_ALTS = {};
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.APP_CHANNEL] = _modDef3849["3/aHX6"];
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL] = _modDef3849["3/aHX6"];
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY] = _modDef3849["3/aHX6"];
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.OVERLAY] = _modDef3849["rPpf5/"];
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET] = null;
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD] = null;
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.BOT] = null;
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.APPLICATION_COMMANDS] = null;
const items = [ConjureProjectTypes.ConjureSupportedSurface.OVERLAY, ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY, ConjureProjectTypes.ConjureSupportedSurface.APP_CHANNEL, ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL];
const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanDesign.tsx");

export { CONJURE_PLAN_DESIGN_ALTS };
export const conjurePlanDesignSurface = function conjurePlanDesignSurface(arg0) {
  let closure_0 = arg0;
  let found = items.find(f111020);
  if (found == null) {
    found = null;
  }
  return found;
};
export const conjurePlanDesignAlt = function conjurePlanDesignAlt(proposal) {
  let obj;
  let prop;
  let closure_0 = proposal;
  let found = items.find(f111020);
  if (found == null) {
    found = null;
  }
  if (null == found) {
    prop = _modDef3849["3/aHX6"];
  } else {
    prop = obj[found];
  }
  return prop;
};
