// Module ID: 1371
// Function ID: 1372
// Name: getToken
// Dependencies: [707, 1372, 2]
// Exports: getArtForPath, getToken, isAuthenticated

// Module 1371 (getToken)
const result = require("set").fileFinishedImporting("utils/AuthenticationUtils.tsx");

export const getToken = function getToken() {
  return importAll(707).getToken();
};
export const isAuthenticated = function isAuthenticated() {
  return null != importAll(707).getToken();
};
export const getArtForPath = function getArtForPath(arg0) {
  let tmp = null;
  if (null != arg0) {
    tmp = null;
    if (obj.test(arg0)) {
      tmp = require(1372) /* registerAsset */;
    }
    obj = /^\/developers/;
  }
  return tmp;
};
