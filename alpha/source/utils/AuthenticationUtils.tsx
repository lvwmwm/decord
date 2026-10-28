// Module ID: 7776
// Function ID: 7777
// Name: AuthenticationUtils
// Dependencies: [1110, 7777, 2]
// Exports: getArtForPath, getToken, isAuthenticated

// Module 7776 (AuthenticationUtils)
import TokenManagerAll from "TokenManager" /* 1110 */;
import AssetRegistry from "AssetRegistry" /* 7777 */;
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
