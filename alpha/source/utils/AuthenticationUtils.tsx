// Module ID: 7950
// Function ID: 7951
// Name: AuthenticationUtils
// Dependencies: [1098, 7951, 2]
// Exports: getArtForPath, getToken, isAuthenticated

// Module 7950 (AuthenticationUtils)
import TokenManagerAll from "TokenManager" /* 1098 */;
import AssetRegistry from "AssetRegistry" /* 7951 */;
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
