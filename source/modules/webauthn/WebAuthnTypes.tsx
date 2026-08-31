// Module ID: 7691
// Function ID: 7692
// Name: prototype
// Dependencies: [2]

// Module 7691 (prototype)
import set from "set" /* 2 */;

const prototype = function IgnorableWebAuthnError() {
  return HermesBuiltin.applyArguments(new.target, new.target);
}.prototype;
class prototype extends Error {
}
const result = set.fileFinishedImporting("modules/webauthn/WebAuthnTypes.tsx");

export const IgnorableWebAuthnError = prototype;
