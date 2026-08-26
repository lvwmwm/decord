// Module ID: 8702
// Function ID: 8703
// Name: prototype
// Dependencies: [2]

// Module 8702 (prototype)
import set from "set" /* 2 */;

const prototype = function IgnorableWebAuthnError() {
  return HermesBuiltin.applyArguments(new.target, new.target);
}.prototype;
class prototype extends Error {
}
const result = set.fileFinishedImporting("modules/webauthn/WebAuthnTypes.tsx");

export const IgnorableWebAuthnError = prototype;
