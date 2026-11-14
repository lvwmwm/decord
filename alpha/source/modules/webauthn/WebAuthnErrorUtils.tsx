// Module ID: 6853
// Function ID: 6854
// Name: WebAuthnErrorUtils
// Dependencies: [6757, 2]
// Exports: isUnknownPasskeyError

// Module 6853 (WebAuthnErrorUtils)
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 6757 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/webauthn/WebAuthnErrorUtils.tsx");

export function isUnknownPasskeyError(code) {
  const tmp = code instanceof V6OrEarlierAPIError.APIError && 60022 === code.code;
  return tmp;
}
