// Module ID: 12157
// Function ID: 12158
// Name: conjurePlanTags
// Dependencies: [7166, 3862, 1126, 2]
// Exports: planDeclaresSurface

// Module 12157 (conjurePlanTags)
import intl from "intl" /* 1126 */;
import _modDef3862 from "module_3862" /* 3862 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 7166 */;
import size from "module_2" /* 2 */;

const obj = {};
obj[ConjureProjectTypes.ConjureSupportedSurface.APP_CHANNEL] = _modDef3862.zrk93C;
obj[ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL] = _modDef3862.r5Ra0p;
obj[ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY] = intl.t.IC5Ann;
obj[ConjureProjectTypes.ConjureSupportedSurface.OVERLAY] = _modDef3862.liTNf3;
obj[ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET] = _modDef3862["EswAi+"];
obj[ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD] = _modDef3862.DnWMLj;
obj[ConjureProjectTypes.ConjureSupportedSurface.BOT] = _modDef3862.VFWfz1;
obj[ConjureProjectTypes.ConjureSupportedSurface.APPLICATION_COMMANDS] = _modDef3862.w7JaEP;
const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanTags.tsx");

export const CONJURE_PLAN_SURFACE_LABELS = obj;
export const planDeclaresSurface = function planDeclaresSurface(proposal, BOT) {
  const supported_surfaces = proposal.supported_surfaces;
  let hasItem;
  if (supported_surfaces != null) {
    hasItem = supported_surfaces.includes(BOT);
  }
  return true === hasItem;
};
