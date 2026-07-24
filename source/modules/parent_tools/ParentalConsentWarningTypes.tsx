// Module ID: 13822
// Function ID: 105939
// Name: frozen
// Dependencies: [2]

// Module 13822 (frozen)
const frozen = Object.freeze({ BANNER: "banner", MODAL: "modal" });
const result = require("set").fileFinishedImporting("modules/parent_tools/ParentalConsentWarningTypes.tsx");

export const ParentalConsentWarningSurface = frozen;
