// Module ID: 13833
// Function ID: 106066
// Name: frozen
// Dependencies: [2]

// Module 13833 (frozen)
const frozen = Object.freeze({ BANNER: "banner", MODAL: "modal" });
const result = require("set").fileFinishedImporting("modules/parent_tools/ParentalConsentWarningTypes.tsx");

export const ParentalConsentWarningSurface = frozen;
