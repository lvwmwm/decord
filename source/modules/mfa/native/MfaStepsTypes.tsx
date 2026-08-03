// Module ID: 14851
// Function ID: 14852
// Name: MfaScreens
// Dependencies: [2]

// Module 14851 (MfaScreens)
const result = require("set").fileFinishedImporting("modules/mfa/native/MfaStepsTypes.tsx");

export const MfaScreens = { BACKUP: "backup", PASSWORD: "password", SELECT: "select", SMS: "sms", TOTP: "totp", WEBAUTHN: "webauthn" };
