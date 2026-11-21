// Module ID: 8368
// Function ID: 8369
// Name: AuthenticationUtils
// Dependencies: [1097, 2]
// Exports: getToken, isAuthenticated

// Module 8368 (AuthenticationUtils)
import TokenManagerAll from "TokenManager" /* 1097 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/AuthenticationUtils.tsx");

export function getToken() {
  const obj = TokenManagerAll;
  return obj.getToken();
}
export function isAuthenticated() {
  const obj = TokenManagerAll;
  return null != obj.getToken();
}
