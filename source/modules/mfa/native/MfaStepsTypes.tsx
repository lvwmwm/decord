// Module ID: 14697
// Function ID: 111995
// Name: MfaScreens
// Dependencies: [2]

// Module 14697 (MfaScreens)
const result = require("set").fileFinishedImporting("modules/mfa/native/MfaStepsTypes.tsx");

export const MfaScreens = { BACKUP: "backup", PASSWORD: "password", SELECT: "select", SMS: "sms", TOTP: "totp", WEBAUTHN: "webauthn" };
