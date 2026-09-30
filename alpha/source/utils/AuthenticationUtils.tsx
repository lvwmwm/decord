// Module ID: 7276
// Function ID: 7277
// Name: AuthenticationUtils
// Dependencies: [1100, 7277, 2]
// Exports: getArtForPath, getToken, isAuthenticated

// Module 7276 (AuthenticationUtils)
import TokenManagerAll from "TokenManager" /* 1100 */;
import _mod7277 from "module_7277" /* 7277 */;
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
      tmp = _mod7277;
    }
    obj = /^\/developers/;
  }
  return tmp;
};
