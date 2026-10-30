// Module ID: 7803
// Function ID: 7804
// Name: AuthenticationUtils
// Dependencies: [1099, 7804, 2]
// Exports: getArtForPath, getToken, isAuthenticated

// Module 7803 (AuthenticationUtils)
import TokenManagerAll from "TokenManager" /* 1099 */;
import AssetRegistry from "AssetRegistry" /* 7804 */;
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
