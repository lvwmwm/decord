// Module ID: 14293
// Function ID: 14294
// Name: frozen
// Dependencies: [2]

// Module 14293 (frozen)
import set from "set" /* 2 */;

const frozen = Object.freeze({ BANNER: "banner", MODAL: "modal" });
const result = set.fileFinishedImporting("modules/parent_tools/ParentalConsentWarningTypes.tsx");

export const ParentalConsentWarningSurface = frozen;
