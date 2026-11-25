// Module ID: 6813
// Function ID: 6814
// Name: WebAuthnErrorUtils
// Dependencies: [5761, 2]
// Exports: isUnknownPasskeyError

// Module 6813 (WebAuthnErrorUtils)
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 5761 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/webauthn/WebAuthnErrorUtils.tsx");

export function isUnknownPasskeyError(code) {
  const tmp = code instanceof V6OrEarlierAPIError.APIError && 60022 === code.code;
  return tmp;
}
