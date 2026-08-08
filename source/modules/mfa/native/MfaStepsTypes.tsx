// Module ID: 14988
// Function ID: 14989
// Name: MfaScreens
// Dependencies: [2]

// Module 14988 (MfaScreens)
const result = require("set").fileFinishedImporting("modules/mfa/native/MfaStepsTypes.tsx");

export const MfaScreens = { BACKUP: "backup", PASSWORD: "password", SELECT: "select", SMS: "sms", TOTP: "totp", WEBAUTHN: "webauthn" };
