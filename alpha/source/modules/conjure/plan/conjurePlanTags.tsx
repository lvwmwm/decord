// Module ID: 17143
// Function ID: 17144
// Name: conjurePlanTags
// Dependencies: [6946, 3849, 1126, 2]
// Exports: planDeclaresSurface

// Module 17143 (conjurePlanTags)
import intl from "intl" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import ConjureTypes from "ConjureTypes" /* 6946 */;
import size from "module_2" /* 2 */;

const obj = {};
obj[ConjureTypes.ConjureSupportedSurface.APP_CHANNEL] = _modDef3849.zrk93C;
obj[ConjureTypes.ConjureSupportedSurface.VOICE_CHANNEL] = _modDef3849.r5Ra0p;
obj[ConjureTypes.ConjureSupportedSurface.ACTIVITY] = intl.t.IC5Ann;
obj[ConjureTypes.ConjureSupportedSurface.OVERLAY] = _modDef3849.liTNf3;
obj[ConjureTypes.ConjureSupportedSurface.PROFILE_WIDGET] = _modDef3849["EswAi+"];
obj[ConjureTypes.ConjureSupportedSurface.AUTOMOD] = _modDef3849.DnWMLj;
obj[ConjureTypes.ConjureSupportedSurface.BOT] = _modDef3849.VFWfz1;
obj[ConjureTypes.ConjureSupportedSurface.APPLICATION_COMMANDS] = _modDef3849.w7JaEP;
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
