// Module ID: 6838
// Function ID: 6839
// Name: WebAuthnErrorUtils
// Dependencies: [6755, 2]
// Exports: isUnknownPasskeyError

// Module 6838 (WebAuthnErrorUtils)
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 6755 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/webauthn/WebAuthnErrorUtils.tsx");

export function isUnknownPasskeyError(code) {
  const tmp = code instanceof V6OrEarlierAPIError.APIError && 60022 === code.code;
  return tmp;
}
