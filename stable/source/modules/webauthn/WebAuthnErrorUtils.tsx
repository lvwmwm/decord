// Module ID: 6836
// Function ID: 6837
// Name: WebAuthnErrorUtils
// Dependencies: [6611, 2]
// Exports: isUnknownPasskeyError

// Module 6836 (WebAuthnErrorUtils)
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 6611 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/webauthn/WebAuthnErrorUtils.tsx");

export function isUnknownPasskeyError(code) {
  const tmp = code instanceof V6OrEarlierAPIError.APIError && 60022 === code.code;
  return tmp;
}
