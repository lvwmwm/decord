// Module ID: 7363
// Function ID: 7364
// Name: AuthenticationUtils
// Dependencies: [1111, 7364, 2]
// Exports: getArtForPath, getToken, isAuthenticated

// Module 7363 (AuthenticationUtils)
import TokenManagerAll from "TokenManager" /* 1111 */;
import AssetRegistry from "AssetRegistry" /* 7364 */;
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
