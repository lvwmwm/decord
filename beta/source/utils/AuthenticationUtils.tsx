// Module ID: 7941
// Function ID: 7942
// Name: AuthenticationUtils
// Dependencies: [1104, 7942, 2]
// Exports: getArtForPath, getToken, isAuthenticated

// Module 7941 (AuthenticationUtils)
import TokenManagerAll from "TokenManager" /* 1104 */;
import _mod7942 from "module_7942" /* 7942 */;
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
      tmp = _mod7942;
    }
    obj = /^\/developers/;
  }
  return tmp;
};
