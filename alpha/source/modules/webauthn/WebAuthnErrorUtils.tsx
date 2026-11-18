// Module ID: 6342
// Function ID: 6343
// Name: WebAuthnErrorUtils
// Dependencies: [6257, 2]
// Exports: isUnknownPasskeyError

// Module 6342 (WebAuthnErrorUtils)
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 6257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/webauthn/WebAuthnErrorUtils.tsx");

export function isUnknownPasskeyError(code) {
  const tmp = code instanceof V6OrEarlierAPIError.APIError && 60022 === code.code;
  return tmp;
}
