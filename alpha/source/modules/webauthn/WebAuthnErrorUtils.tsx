// Module ID: 6718
// Function ID: 6719
// Name: WebAuthnErrorUtils
// Dependencies: [5666, 2]
// Exports: isUnknownPasskeyError

// Module 6718 (WebAuthnErrorUtils)
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 5666 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/webauthn/WebAuthnErrorUtils.tsx");

export function isUnknownPasskeyError(code) {
  const tmp = code instanceof V6OrEarlierAPIError.APIError && 60022 === code.code;
  return tmp;
}
