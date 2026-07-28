// Module ID: 14742
// Function ID: 112173
// Name: MfaScreens
// Dependencies: [2]

// Module 14742 (MfaScreens)
const result = require("set").fileFinishedImporting("modules/mfa/native/MfaStepsTypes.tsx");

export const MfaScreens = { BACKUP: "backup", PASSWORD: "password", SELECT: "select", SMS: "sms", TOTP: "totp", WEBAUTHN: "webauthn" };
