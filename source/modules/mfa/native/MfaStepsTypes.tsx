// Module ID: 14514
// Function ID: 109312
// Name: MfaScreens
// Dependencies: [284214097]

// Module 14514 (MfaScreens)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/mfa/native/MfaStepsTypes.tsx");

export const MfaScreens = { BACKUP: "backup", PASSWORD: "password", SELECT: "select", SMS: "sms", TOTP: "totp", WEBAUTHN: "webauthn" };
