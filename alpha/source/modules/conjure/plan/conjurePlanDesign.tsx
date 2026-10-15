// Module ID: 12165
// Function ID: 12166
// Name: conjurePlanDesign
// Dependencies: [7166, 3862, 12157, 2]
// Exports: conjurePlanDesignAlt, conjurePlanDesignSurface

// Module 12165 (conjurePlanDesign)
import _modDef3862 from "module_3862" /* 3862 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 7166 */;
import conjurePlanTags from "conjurePlanTags" /* 12157 */;
import size from "module_2" /* 2 */;

const f111685 = (item) => {
  const obj = conjurePlanTags;
  return obj.planDeclaresSurface(proposal, item);
};
const CONJURE_PLAN_DESIGN_ALTS = {};
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.APP_CHANNEL] = _modDef3862["3/aHX6"];
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL] = _modDef3862["3/aHX6"];
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY] = _modDef3862["3/aHX6"];
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.OVERLAY] = _modDef3862["rPpf5/"];
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET] = null;
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD] = null;
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.BOT] = null;
CONJURE_PLAN_DESIGN_ALTS[ConjureProjectTypes.ConjureSupportedSurface.APPLICATION_COMMANDS] = null;
const items = [ConjureProjectTypes.ConjureSupportedSurface.OVERLAY, ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY, ConjureProjectTypes.ConjureSupportedSurface.APP_CHANNEL, ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL];
const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanDesign.tsx");

export { CONJURE_PLAN_DESIGN_ALTS };
export const conjurePlanDesignSurface = function conjurePlanDesignSurface(arg0) {
  let closure_0 = arg0;
  let found = items.find(f111685);
  if (found == null) {
    found = null;
  }
  return found;
};
export const conjurePlanDesignAlt = function conjurePlanDesignAlt(proposal) {
  let obj;
  let prop;
  let closure_0 = proposal;
  let found = items.find(f111685);
  if (found == null) {
    found = null;
  }
  if (null == found) {
    prop = _modDef3862["3/aHX6"];
  } else {
    prop = obj[found];
  }
  return prop;
};
