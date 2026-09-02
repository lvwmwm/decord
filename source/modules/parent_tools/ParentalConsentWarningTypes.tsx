// Module ID: 14697
// Function ID: 14698
// Name: frozen
// Dependencies: [2]

// Module 14697 (frozen)
import set from "set" /* 2 */;

const frozen = Object.freeze({ BANNER: "banner", MODAL: "modal" });
const result = set.fileFinishedImporting("modules/parent_tools/ParentalConsentWarningTypes.tsx");

export const ParentalConsentWarningSurface = frozen;
