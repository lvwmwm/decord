// Module ID: 6434
// Function ID: 6435
// Name: WebAuthnErrorUtils
// Dependencies: [6349, 2]
// Exports: isUnknownPasskeyError

// Module 6434 (WebAuthnErrorUtils)
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 6349 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/webauthn/WebAuthnErrorUtils.tsx");

export function isUnknownPasskeyError(code) {
  const tmp = code instanceof V6OrEarlierAPIError.APIError && 60022 === code.code;
  return tmp;
}
