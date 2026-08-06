// Module ID: 14029
// Function ID: 14030
// Name: frozen
// Dependencies: [2]

// Module 14029 (frozen)
const frozen = Object.freeze({ BANNER: "banner", MODAL: "modal" });
const result = require("set").fileFinishedImporting("modules/parent_tools/ParentalConsentWarningTypes.tsx");

export const ParentalConsentWarningSurface = frozen;
