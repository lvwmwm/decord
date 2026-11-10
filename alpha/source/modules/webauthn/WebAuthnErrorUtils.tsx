// Module ID: 6806
// Function ID: 6807
// Name: WebAuthnErrorUtils
// Dependencies: [6581, 2]
// Exports: isUnknownPasskeyError

// Module 6806 (WebAuthnErrorUtils)
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 6581 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/webauthn/WebAuthnErrorUtils.tsx");

export function isUnknownPasskeyError(code) {
  const tmp = code instanceof V6OrEarlierAPIError.APIError && 60022 === code.code;
  return tmp;
}
