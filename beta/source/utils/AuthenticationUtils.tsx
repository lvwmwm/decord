// Module ID: 7085
// Function ID: 7086
// Name: AuthenticationUtils
// Dependencies: [1112, 7086, 2]
// Exports: getArtForPath, getToken, isAuthenticated

// Module 7085 (AuthenticationUtils)
import TokenManagerAll from "TokenManager" /* 1112 */;
import AssetRegistry from "AssetRegistry" /* 7086 */;
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
