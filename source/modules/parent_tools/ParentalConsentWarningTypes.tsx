// Module ID: 14123
// Function ID: 14124
// Name: frozen
// Dependencies: [2]

// Module 14123 (frozen)
const frozen = Object.freeze({ BANNER: "banner", MODAL: "modal" });
const result = require("set").fileFinishedImporting("modules/parent_tools/ParentalConsentWarningTypes.tsx");

export const ParentalConsentWarningSurface = frozen;
