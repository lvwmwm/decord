// Module ID: 6790
// Function ID: 6791
// Name: WebAuthnErrorUtils
// Dependencies: [6694, 2]
// Exports: isUnknownPasskeyError

// Module 6790 (WebAuthnErrorUtils)
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 6694 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/webauthn/WebAuthnErrorUtils.tsx");

export function isUnknownPasskeyError(code) {
  const tmp = code instanceof V6OrEarlierAPIError.APIError && 60022 === code.code;
  return tmp;
}
