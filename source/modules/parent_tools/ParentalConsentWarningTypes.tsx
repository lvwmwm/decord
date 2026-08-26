// Module ID: 14396
// Function ID: 14397
// Name: frozen
// Dependencies: [2]

// Module 14396 (frozen)
import set from "set" /* 2 */;

const frozen = Object.freeze({ BANNER: "banner", MODAL: "modal" });
const result = set.fileFinishedImporting("modules/parent_tools/ParentalConsentWarningTypes.tsx");

export const ParentalConsentWarningSurface = frozen;
