// Module ID: 13894
// Function ID: 13895
// Name: frozen
// Dependencies: [2]

// Module 13894 (frozen)
const frozen = Object.freeze({ BANNER: "banner", MODAL: "modal" });
const result = require("set").fileFinishedImporting("modules/parent_tools/ParentalConsentWarningTypes.tsx");

export const ParentalConsentWarningSurface = frozen;
