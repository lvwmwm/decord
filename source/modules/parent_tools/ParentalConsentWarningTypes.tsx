// Module ID: 13992
// Function ID: 13993
// Name: frozen
// Dependencies: [2]

// Module 13992 (frozen)
const frozen = Object.freeze({ BANNER: "banner", MODAL: "modal" });
const result = require("set").fileFinishedImporting("modules/parent_tools/ParentalConsentWarningTypes.tsx");

export const ParentalConsentWarningSurface = frozen;
