// Module ID: 1367
// Function ID: 1368
// Name: getToken
// Dependencies: [707, 1368, 2]
// Exports: getArtForPath, getToken, isAuthenticated

// Module 1367 (getToken)
import set from "set" /* 2 */;
import setSecondaryTokenAll from "setSecondaryToken" /* 707 */;
import registerAsset from "registerAsset" /* 1368 */;

const result = set.fileFinishedImporting("utils/AuthenticationUtils.tsx");

export const getToken = function getToken() {
  return setSecondaryTokenAll.getToken();
};
export const isAuthenticated = function isAuthenticated() {
  return null != setSecondaryTokenAll.getToken();
};
export const getArtForPath = function getArtForPath(arg0) {
  let tmp = null;
  if (null != arg0) {
    tmp = null;
    if (obj.test(arg0)) {
      tmp = registerAsset;
    }
    obj = /^\/developers/;
  }
  return tmp;
};
