// Module ID: 12391
// Function ID: 12392
// Name: conjurePlanTags
// Dependencies: [2]
// Exports: planDeclaresSurface

// Module 12391 (conjurePlanTags)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanTags.tsx");

export const planDeclaresSurface = function planDeclaresSurface(supported_surfaces, APPLICATION_COMMANDS) {
  supported_surfaces = supported_surfaces.supported_surfaces;
  let hasItem;
  if (supported_surfaces != null) {
    hasItem = supported_surfaces.includes(APPLICATION_COMMANDS);
  }
  return true === hasItem;
};
