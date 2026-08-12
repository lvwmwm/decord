// Module ID: 14180
// Function ID: 14181
// Name: frozen
// Dependencies: [2]

// Module 14180 (frozen)
const frozen = Object.freeze({ BANNER: "banner", MODAL: "modal" });
const result = require("set").fileFinishedImporting("modules/parent_tools/ParentalConsentWarningTypes.tsx");

export const ParentalConsentWarningSurface = frozen;
