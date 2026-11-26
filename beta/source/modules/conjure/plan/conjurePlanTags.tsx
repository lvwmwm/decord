// Module ID: 18574
// Function ID: 18575
// Name: conjurePlanTags
// Dependencies: [2]
// Exports: planDeclaresSurface

// Module 18574 (conjurePlanTags)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanTags.tsx");

export function planDeclaresSurface(supported_surfaces, APPLICATION_COMMANDS) {
  supported_surfaces = supported_surfaces.supported_surfaces;
  let hasItem;
  if (supported_surfaces != null) {
    hasItem = supported_surfaces.includes(APPLICATION_COMMANDS);
  }
  return true === hasItem;
}
