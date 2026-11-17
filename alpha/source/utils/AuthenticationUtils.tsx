// Module ID: 8784
// Function ID: 8785
// Name: AuthenticationUtils
// Dependencies: [1098, 2]
// Exports: getToken, isAuthenticated

// Module 8784 (AuthenticationUtils)
import TokenManagerAll from "TokenManager" /* 1098 */;
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
