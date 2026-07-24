// Module ID: 975
// Function ID: 10489
// Name: getDevServer
// Dependencies: [91]

// Module 975 (getDevServer)
const module = arg2;
const dependencyMap = arg6;
arg5.default = function getDevServer() {
  if (undefined === first) {
    let obj = module(91);
    const str = obj.getConstants().scriptURL;
    const match = str.match(/^https?:\/\/.*?\//);
    first = null;
    if (match) {
      first = match[0];
    }
    let tmp5 = null;
    if (match) {
      tmp5 = str;
    }
    let closure_3 = tmp5;
  }
  obj = {};
  let str2 = "http://localhost:8081/";
  if (null != first) {
    str2 = first;
  }
  obj.url = str2;
  obj.fullBundleUrl = closure_3;
  obj.bundleLoadedFromServer = null !== first;
  return obj;
};
