// Module ID: 14793
// Function ID: 14794
// Name: frozen
// Dependencies: [2]

// Module 14793 (frozen)
import set from "set" /* 2 */;

const frozen = Object.freeze({ BANNER: "banner", MODAL: "modal" });
const result = set.fileFinishedImporting("modules/parent_tools/ParentalConsentWarningTypes.tsx");

export const ParentalConsentWarningSurface = frozen;
