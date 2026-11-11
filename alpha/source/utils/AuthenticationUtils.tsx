// Module ID: 8706
// Function ID: 8707
// Name: AuthenticationUtils
// Dependencies: [1098, 8707, 2]
// Exports: getArtForPath, getToken, isAuthenticated

// Module 8706 (AuthenticationUtils)
import TokenManagerAll from "TokenManager" /* 1098 */;
import AssetRegistry from "AssetRegistry" /* 8707 */;
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
export function getArtForPath(arg0) {
  let tmp = null;
  if (null != arg0) {
    tmp = null;
    const obj = /^\/developers/;
    if (obj.test(arg0)) {
      tmp = AssetRegistry;
    }
  }
  return tmp;
}
