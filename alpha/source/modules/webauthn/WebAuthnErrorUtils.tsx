// Module ID: 6843
// Function ID: 6844
// Name: WebAuthnErrorUtils
// Dependencies: [6747, 2]
// Exports: isUnknownPasskeyError

// Module 6843 (WebAuthnErrorUtils)
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 6747 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/webauthn/WebAuthnErrorUtils.tsx");

export function isUnknownPasskeyError(code) {
  const tmp = code instanceof V6OrEarlierAPIError.APIError && 60022 === code.code;
  return tmp;
}
