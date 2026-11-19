// Module ID: 6313
// Function ID: 6314
// Name: WebAuthnErrorUtils
// Dependencies: [6228, 2]
// Exports: isUnknownPasskeyError

// Module 6313 (WebAuthnErrorUtils)
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 6228 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/webauthn/WebAuthnErrorUtils.tsx");

export function isUnknownPasskeyError(code) {
  const tmp = code instanceof V6OrEarlierAPIError.APIError && 60022 === code.code;
  return tmp;
}
