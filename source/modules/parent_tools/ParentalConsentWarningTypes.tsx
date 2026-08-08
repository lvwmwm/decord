// Module ID: 14113
// Function ID: 14114
// Name: frozen
// Dependencies: [2]

// Module 14113 (frozen)
const frozen = Object.freeze({ BANNER: "banner", MODAL: "modal" });
const result = require("set").fileFinishedImporting("modules/parent_tools/ParentalConsentWarningTypes.tsx");

export const ParentalConsentWarningSurface = frozen;
