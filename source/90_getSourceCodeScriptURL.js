// Module ID: 90
// Function ID: 1520
// Name: getSourceCodeScriptURL
// Dependencies: []
// Exports: default

// Module 90 (getSourceCodeScriptURL)
function getSourceCodeScriptURL() {
  if (null != scriptURL) {
    const tmp3 = scriptURL;
  } else {
    const scriptURL = importDefault(dependencyMap[0]).getConstants().scriptURL;
    const obj = importDefault(dependencyMap[0]);
  }
  return tmp3;
}
function resolveAssetSource(source) {
  if (null != source) {
    if ("object" !== typeof source) {
      const assetByID = require(dependencyMap[1]).getAssetByID(source);
      if (assetByID) {
        let _default = require(dependencyMap[2]).default;
        if (undefined === first) {
          const str = getSourceCodeScriptURL();
          let match;
          if (null != str) {
            match = str.match(/^https?:\/\/.*?\//);
          }
          let first = null;
          if (match) {
            first = match[0];
          }
        }
        const prototype = _default.prototype;
        _default = new _default(first, function getScriptURL() {
          if (undefined === tmp4) {
            const str = callback();
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
          }
          return tmp4;
        }(), assetByID);
        if (closure_6) {
          for (const item10033 of closure_6) {
            let tmp15 = _default;
            let item10033Result = item10033(obj);
            let tmp17 = item10033Result;
            if (null != item10033Result) {
              obj2.return();
              return item10033Result;
            } else {
              // continue
            }
          }
        }
        return _default.defaultAsset();
      } else {
        return null;
      }
      const obj3 = require(dependencyMap[1]);
    }
  }
  return source;
}
let closure_6 = [];
resolveAssetSource.pickScale = require(dependencyMap[3]).pickScale;
resolveAssetSource.setCustomSourceTransformer = function setCustomSourceTransformer(arg0) {
  const items = [arg0];
  let closure_6 = items;
};
resolveAssetSource.addCustomSourceTransformer = function addCustomSourceTransformer(arg0) {

};

export default resolveAssetSource;
