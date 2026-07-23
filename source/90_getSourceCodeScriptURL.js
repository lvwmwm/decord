// Module ID: 90
// Function ID: 1520
// Name: getSourceCodeScriptURL
// Dependencies: [91, 93, 94, 95]
// Exports: default

// Module 90 (getSourceCodeScriptURL)
function getSourceCodeScriptURL() {
  if (null != scriptURL) {
    const tmp3 = scriptURL;
  } else {
    scriptURL = importDefault(91).getConstants().scriptURL;
    const obj = importDefault(91);
  }
  return tmp3;
}
function resolveAssetSource(source) {
  if (null != source) {
    if ("object" !== typeof source) {
      const assetByID = require(93).getAssetByID(source);
      if (assetByID) {
        let _default = require(94) /* getScaledAssetPath */.default;
        if (undefined === first) {
          let str = getSourceCodeScriptURL();
          let match;
          if (null != str) {
            match = str.match(/^https?:\/\/.*?\//);
          }
          first = null;
          if (match) {
            first = match[0];
          }
        }
        const prototype = _default.prototype;
        _default = new _default(first, (function getScriptURL() {
          if (undefined === outer1_4) {
            const str = outer1_7();
            let text = str;
            if (null == str) {
              let tmp4 = text;
            } else {
              tmp4 = null;
              if (!str.startsWith("assets://")) {
                const substr = str.substring(0, str.lastIndexOf("/") + 1);
                text = substr;
                if (!substr.includes("://")) {
                  text = `file://${obj}`;
                }
              }
            }
            outer1_4 = tmp4;
          }
          return outer1_4;
        })(), assetByID);
        if (closure_6) {
          for (const item10033 of closure_6) {
            let tmp15 = _default;
            let item10033Result = item10033(obj);
            let tmp17 = item10033Result;
            if (null != item10033Result) {
              obj2.return();
              return item10033Result;
            }
          }
        }
        return _default.defaultAsset();
      } else {
        return null;
      }
      const obj3 = require(93);
    }
  }
  return source;
}
let closure_6 = [];
resolveAssetSource.pickScale = require("pickScale").pickScale;
resolveAssetSource.setCustomSourceTransformer = function setCustomSourceTransformer(arg0) {
  const items = [arg0];
};
resolveAssetSource.addCustomSourceTransformer = function addCustomSourceTransformer(arg0) {

};

export default resolveAssetSource;
