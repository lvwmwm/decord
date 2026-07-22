// Module ID: 14525
// Function ID: 109387
// Name: MfaScreens
// Dependencies: []

// Module 14525 (MfaScreens)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/mfa/native/MfaStepsTypes.tsx");

export const MfaScreens = { BACKUP: "backup", PASSWORD: "password", SELECT: "select", SMS: "sms", TOTP: "totp", WEBAUTHN: "webauthn" };
