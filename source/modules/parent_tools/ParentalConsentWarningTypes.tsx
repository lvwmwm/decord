// Module ID: 14189
// Function ID: 14190
// Name: frozen
// Dependencies: [2]

// Module 14189 (frozen)
const frozen = Object.freeze({ BANNER: "banner", MODAL: "modal" });
const result = require("set").fileFinishedImporting("modules/parent_tools/ParentalConsentWarningTypes.tsx");

export const ParentalConsentWarningSurface = frozen;
