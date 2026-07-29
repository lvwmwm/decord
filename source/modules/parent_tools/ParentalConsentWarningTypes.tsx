// Module ID: 13899
// Function ID: 13900
// Name: frozen
// Dependencies: [2]

// Module 13899 (frozen)
const frozen = Object.freeze({ BANNER: "banner", MODAL: "modal" });
const result = require("set").fileFinishedImporting("modules/parent_tools/ParentalConsentWarningTypes.tsx");

export const ParentalConsentWarningSurface = frozen;
