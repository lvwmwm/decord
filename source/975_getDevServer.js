// Module ID: 975
// Function ID: 10487
// Name: getDevServer
// Dependencies: []

// Module 975 (getDevServer)
arg5.default = function getDevServer() {
  if (undefined === first) {
    let obj = arg2(arg6[0]);
    const str = obj.getConstants().scriptURL;
    const match = str.match(/^https?:\/\/.*?\//);
    let first = null;
    if (match) {
      first = match[0];
    }
    let tmp5 = null;
    if (match) {
      tmp5 = str;
    }
  }
  obj = {};
  let str2 = "http://localhost:8081/";
  if (null != first) {
    str2 = first;
  }
  obj.url = str2;
  obj.fullBundleUrl = tmp5;
  obj.bundleLoadedFromServer = null !== first;
  return obj;
};
