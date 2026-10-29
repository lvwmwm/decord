// Module ID: 12536
// Function ID: 12537
// Name: conjurePlanTags
// Dependencies: [2]
// Exports: planDeclaresSurface

// Module 12536 (conjurePlanTags)
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
