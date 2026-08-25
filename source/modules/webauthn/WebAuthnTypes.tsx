// Module ID: 8634
// Function ID: 8635
// Name: prototype
// Dependencies: [2]

// Module 8634 (prototype)
import set from "set" /* 2 */;

const prototype = function IgnorableWebAuthnError() {
  return HermesBuiltin.applyArguments(new.target, new.target);
}.prototype;
class prototype extends Error {
}
const result = set.fileFinishedImporting("modules/webauthn/WebAuthnTypes.tsx");

export const IgnorableWebAuthnError = prototype;
