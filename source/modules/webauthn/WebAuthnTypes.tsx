// Module ID: 8260
// Function ID: 8261
// Name: prototype
// Dependencies: [2]

// Module 8260 (prototype)
const prototype = function IgnorableWebAuthnError() {
  return HermesBuiltin.applyArguments(new.target, new.target);
}.prototype;
class prototype extends Error {
}
const result = require("set").fileFinishedImporting("modules/webauthn/WebAuthnTypes.tsx");

export const IgnorableWebAuthnError = prototype;
