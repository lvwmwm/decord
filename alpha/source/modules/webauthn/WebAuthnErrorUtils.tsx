// Module ID: 6315
// Function ID: 6316
// Name: WebAuthnErrorUtils
// Dependencies: [6230, 2]
// Exports: isUnknownPasskeyError

// Module 6315 (WebAuthnErrorUtils)
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 6230 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/webauthn/WebAuthnErrorUtils.tsx");

export function isUnknownPasskeyError(code) {
  const tmp = code instanceof V6OrEarlierAPIError.APIError && 60022 === code.code;
  return tmp;
}
