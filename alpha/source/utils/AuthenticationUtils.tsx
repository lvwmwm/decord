// Module ID: 7688
// Function ID: 7689
// Name: AuthenticationUtils
// Dependencies: [1113, 7689, 2]
// Exports: getArtForPath, getToken, isAuthenticated

// Module 7688 (AuthenticationUtils)
import TokenManagerAll from "TokenManager" /* 1113 */;
import AssetRegistry from "AssetRegistry" /* 7689 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/AuthenticationUtils.tsx");

export const getToken = function getToken() {
  const obj = TokenManagerAll;
  return obj.getToken();
};
export const isAuthenticated = function isAuthenticated() {
  const obj = TokenManagerAll;
  return null != obj.getToken();
};
export const getArtForPath = function getArtForPath(arg0) {
  let tmp = null;
  if (null != arg0) {
    tmp = null;
    const obj = /^\/developers/;
    if (obj.test(arg0)) {
      tmp = AssetRegistry;
    }
  }
  return tmp;
};
