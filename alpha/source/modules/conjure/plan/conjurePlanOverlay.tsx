// Module ID: 16954
// Function ID: 16955
// Name: conjurePlanOverlay
// Dependencies: [6933, 2]
// Exports: planSupportsOverlay

// Module 16954 (conjurePlanOverlay)
import ConjureTypes from "ConjureTypes" /* 6933 */;
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
