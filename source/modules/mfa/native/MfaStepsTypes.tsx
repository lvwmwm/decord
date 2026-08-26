// Module ID: 15294
// Function ID: 15295
// Name: MfaScreens
// Dependencies: [2]

// Module 15294 (MfaScreens)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/mfa/native/MfaStepsTypes.tsx");

export const MfaScreens = { BACKUP: "backup", PASSWORD: "password", SELECT: "select", SMS: "sms", TOTP: "totp", WEBAUTHN: "webauthn" };
