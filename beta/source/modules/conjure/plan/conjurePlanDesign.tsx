// Module ID: 12268
// Function ID: 12269
// Name: conjurePlanDesign
// Dependencies: [6294, 3883, 12266, 2]
// Exports: conjurePlanDesignAlt, conjurePlanDesignSurface

// Module 12268 (conjurePlanDesign)
import _modDef3883 from "module_3883" /* 3883 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6294 */;
import conjurePlanTags from "conjurePlanTags" /* 12266 */;
import size from "module_2" /* 2 */;

const f112503 = (item) => {
  const obj = conjurePlanTags;
  return obj.planDeclaresSurface(proposal, item);
};
const CONJURE_PLAN_DESIGN_ALTS = {};
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.APP_CHANNEL] = _modDef3883["3/aHX6"];
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL] = _modDef3883["3/aHX6"];
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY] = _modDef3883["3/aHX6"];
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.OVERLAY] = _modDef3883["rPpf5/"];
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET] = null;
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD] = null;
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.BOT] = null;
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.APPLICATION_COMMANDS] = null;
const items = [ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY, ConjureProjectTypes.ConjureSupportedSurface.APP_CHANNEL, ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL, ConjureProjectTypes.ConjureSupportedSurface.OVERLAY];
const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanDesign.tsx");

export { CONJURE_PLAN_DESIGN_ALTS };
export const conjurePlanDesignSurface = function conjurePlanDesignSurface(proposal) {
  let closure_0 = proposal;
  let found = items.find(f112503);
  if (found == null) {
    found = null;
  }
  return found;
};
export const conjurePlanDesignAlt = function conjurePlanDesignAlt(proposal) {
  let obj;
  let prop;
  let closure_0 = proposal;
  let found = items.find(f112503);
  if (found == null) {
    found = null;
  }
  if (null == found) {
    prop = _modDef3883["3/aHX6"];
  } else {
    prop = obj[found];
  }
  return prop;
};
