// Module ID: 13771
// Function ID: 105615
// Name: frozen
// Dependencies: [2]

// Module 13771 (frozen)
const frozen = Object.freeze({ BANNER: "banner", MODAL: "modal" });
const result = require("set").fileFinishedImporting("modules/parent_tools/ParentalConsentWarningTypes.tsx");

export const ParentalConsentWarningSurface = frozen;
