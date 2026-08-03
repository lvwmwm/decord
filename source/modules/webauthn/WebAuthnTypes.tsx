// Module ID: 9380
// Function ID: 9381
// Name: prototype
// Dependencies: [2]

// Module 9380 (prototype)
const prototype = function IgnorableWebAuthnError() {
  return HermesBuiltin.applyArguments(new.target, new.target);
}.prototype;
class prototype extends Error {
}
const result = require("set").fileFinishedImporting("modules/webauthn/WebAuthnTypes.tsx");

export const IgnorableWebAuthnError = prototype;
