// Module ID: 17086
// Function ID: 17087
// Name: conjurePlanOverlay
// Dependencies: [6940, 2]
// Exports: planSupportsOverlay

// Module 17086 (conjurePlanOverlay)
import ConjureTypes from "ConjureTypes" /* 6940 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanOverlay.tsx");

export const planSupportsOverlay = function planSupportsOverlay(supported_surfaces) {
  supported_surfaces = supported_surfaces.supported_surfaces;
  let hasItem;
  if (supported_surfaces != null) {
    hasItem = supported_surfaces.includes(ConjureTypes.ConjureSupportedSurface.OVERLAY);
  }
  return true === hasItem;
};
