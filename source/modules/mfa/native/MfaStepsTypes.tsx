// Module ID: 14864
// Function ID: 14865
// Name: MfaScreens
// Dependencies: [2]

// Module 14864 (MfaScreens)
const result = require("set").fileFinishedImporting("modules/mfa/native/MfaStepsTypes.tsx");

export const MfaScreens = { BACKUP: "backup", PASSWORD: "password", SELECT: "select", SMS: "sms", TOTP: "totp", WEBAUTHN: "webauthn" };
