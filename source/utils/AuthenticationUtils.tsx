// Module ID: 1328
// Function ID: 15563
// Name: getToken
// Dependencies: []
// Exports: getArtForPath, isAuthenticated

// Module 1328 (getToken)
function getToken() {
  return importAll(dependencyMap[0]).getToken();
}
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("utils/AuthenticationUtils.tsx");

export { getToken };
export const isAuthenticated = function isAuthenticated() {
  return null != getToken();
};
export const getArtForPath = function getArtForPath(arg0) {
  let tmp = null;
  if (null != arg0) {
    tmp = null;
    if (obj.test(arg0)) {
      tmp = require(dependencyMap[1]);
    }
    const obj = /^\/developers/;
  }
  return tmp;
};
