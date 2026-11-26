// Module ID: 6844
// Function ID: 6845
// Name: WebAuthnErrorUtils
// Dependencies: [5792, 2]
// Exports: isUnknownPasskeyError

// Module 6844 (WebAuthnErrorUtils)
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 5792 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/webauthn/WebAuthnErrorUtils.tsx");

export function isUnknownPasskeyError(code) {
  const tmp = code instanceof V6OrEarlierAPIError.APIError && 60022 === code.code;
  return tmp;
}
