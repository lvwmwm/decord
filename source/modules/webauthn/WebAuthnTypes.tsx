// Module ID: 9207
// Function ID: 9208
// Name: prototype
// Dependencies: [2]

// Module 9207 (prototype)
const prototype = function IgnorableWebAuthnError() {
  return HermesBuiltin.applyArguments(new.target, new.target);
}.prototype;
class prototype extends Error {
}
const result = require("set").fileFinishedImporting("modules/webauthn/WebAuthnTypes.tsx");

export const IgnorableWebAuthnError = prototype;
