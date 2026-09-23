// Module ID: 7989
// Function ID: 7990
// Name: AuthenticationUtils
// Dependencies: [1100, 7990, 2]
// Exports: getArtForPath, getToken, isAuthenticated

// Module 7989 (AuthenticationUtils)
import TokenManagerAll from "TokenManager" /* 1100 */;
import _mod7990 from "module_7990" /* 7990 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/AuthenticationUtils.tsx");

export const getToken = function getToken() {
  return TokenManagerAll.getToken();
};
export const isAuthenticated = function isAuthenticated() {
  return null != TokenManagerAll.getToken();
};
export const getArtForPath = function getArtForPath(arg0) {
  let tmp = null;
  if (null != arg0) {
    tmp = null;
    if (obj.test(arg0)) {
      tmp = _mod7990;
    }
    obj = /^\/developers/;
  }
  return tmp;
};
