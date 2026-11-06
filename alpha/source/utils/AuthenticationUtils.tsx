// Module ID: 7909
// Function ID: 7910
// Name: AuthenticationUtils
// Dependencies: [1098, 7910, 2]
// Exports: getArtForPath, getToken, isAuthenticated

// Module 7909 (AuthenticationUtils)
import TokenManagerAll from "TokenManager" /* 1098 */;
import AssetRegistry from "AssetRegistry" /* 7910 */;
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
