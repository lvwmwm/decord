// Module ID: 13834
// Function ID: 106071
// Name: frozen
// Dependencies: [2]

// Module 13834 (frozen)
const frozen = Object.freeze({ BANNER: "banner", MODAL: "modal" });
const result = require("set").fileFinishedImporting("modules/parent_tools/ParentalConsentWarningTypes.tsx");

export const ParentalConsentWarningSurface = frozen;
