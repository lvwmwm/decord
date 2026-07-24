// Module ID: 1328
// Function ID: 15570
// Name: getToken
// Dependencies: [684, 1329, 2]
// Exports: getArtForPath, isAuthenticated

// Module 1328 (getToken)
function getToken() {
  return importAll(684).getToken();
}
const result = require("set").fileFinishedImporting("utils/AuthenticationUtils.tsx");

export { getToken };
export const isAuthenticated = function isAuthenticated() {
  return null != getToken();
};
export const getArtForPath = function getArtForPath(arg0) {
  let tmp = null;
  if (null != arg0) {
    tmp = null;
    if (obj.test(arg0)) {
      tmp = require(1329) /* registerAsset */;
    }
    obj = /^\/developers/;
  }
  return tmp;
};
