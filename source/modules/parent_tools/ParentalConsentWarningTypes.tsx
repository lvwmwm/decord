// Module ID: 14019
// Function ID: 14020
// Name: frozen
// Dependencies: [2]

// Module 14019 (frozen)
const frozen = Object.freeze({ BANNER: "banner", MODAL: "modal" });
const result = require("set").fileFinishedImporting("modules/parent_tools/ParentalConsentWarningTypes.tsx");

export const ParentalConsentWarningSurface = frozen;
