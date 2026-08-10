// Module ID: 14115
// Function ID: 14116
// Name: frozen
// Dependencies: [2]

// Module 14115 (frozen)
const frozen = Object.freeze({ BANNER: "banner", MODAL: "modal" });
const result = require("set").fileFinishedImporting("modules/parent_tools/ParentalConsentWarningTypes.tsx");

export const ParentalConsentWarningSurface = frozen;
