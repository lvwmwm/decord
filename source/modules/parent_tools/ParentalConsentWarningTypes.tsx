// Module ID: 13918
// Function ID: 13919
// Name: frozen
// Dependencies: [2]

// Module 13918 (frozen)
const frozen = Object.freeze({ BANNER: "banner", MODAL: "modal" });
const result = require("set").fileFinishedImporting("modules/parent_tools/ParentalConsentWarningTypes.tsx");

export const ParentalConsentWarningSurface = frozen;
