// Module ID: 17287
// Function ID: 17288
// Name: conjurePlanTags
// Dependencies: [6947, 3849, 1126, 2]
// Exports: planDeclaresSurface

// Module 17287 (conjurePlanTags)
import intl from "intl" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6947 */;
import size from "module_2" /* 2 */;

const obj = {};
obj[ConjureProjectTypes.ConjureSupportedSurface.APP_CHANNEL] = _modDef3849.zrk93C;
obj[ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL] = _modDef3849.r5Ra0p;
obj[ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY] = intl.t.IC5Ann;
obj[ConjureProjectTypes.ConjureSupportedSurface.OVERLAY] = _modDef3849.liTNf3;
obj[ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET] = _modDef3849["EswAi+"];
obj[ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD] = _modDef3849.DnWMLj;
obj[ConjureProjectTypes.ConjureSupportedSurface.BOT] = _modDef3849.VFWfz1;
obj[ConjureProjectTypes.ConjureSupportedSurface.APPLICATION_COMMANDS] = _modDef3849.w7JaEP;
const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanTags.tsx");

export const CONJURE_PLAN_SURFACE_LABELS = obj;
export const planDeclaresSurface = function planDeclaresSurface(proposal, AUTOMOD) {
  const supported_surfaces = proposal.supported_surfaces;
  let hasItem;
  if (supported_surfaces != null) {
    hasItem = supported_surfaces.includes(AUTOMOD);
  }
  return true === hasItem;
};
