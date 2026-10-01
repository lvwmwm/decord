// Module ID: 81
// Function ID: 82
// Name: resolveAssetSource
// Dependencies: [82, 84, 85, 86]
// Exports: default

// Module 81 (resolveAssetSource)
import _modDef82 from "module_82" /* 82 */;
import AssetRegistry from "AssetRegistry" /* 84 */;
import pickScale from "pickScale" /* 86 */;

let c4, first, scriptURL;

function resolveAssetSource(channelIcon) {
  function getDevServerURL() {
    let tmp = first;
    if (undefined === first) {
      if (null == scriptURL) {
        const obj = _modDef82;
        scriptURL = obj.getConstants().scriptURL;
      }
      let match;
      if (str != null) {
        match = str.match(/^https?:\/\/.*?\//);
      }
      first = null;
      if (match) {
        first = match[0];
      }
      tmp = first;
    }
    return tmp;
  }
  function getScriptURL() {
    let tmp = c4;
    if (undefined === c4) {
      let tmp5;
      if (null == scriptURL) {
        const obj = _modDef82;
        scriptURL = obj.getConstants().scriptURL;
      }
      let text = str;
      if (null == str) {
        tmp5 = text;
      } else {
        tmp5 = null;
        if (!str.startsWith("assets://")) {
          const substr = str.substring(0, str.lastIndexOf("/") + 1);
          text = substr;
          if (!substr.includes("://")) {
            text = `file://${obj2}`;
          }
        }
      }
      c4 = tmp5;
      tmp = tmp5;
    }
    return tmp;
  }
  if (null != channelIcon) {
    if (typeof channelIcon !== "object") {
      const obj3 = AssetRegistry;
      const assetByID = obj3.getAssetByID(channelIcon);
      const tmp10 = require;
      if (assetByID) {
        const _default = tmp10(85).default;
        let tmp = getDevServerURL();
        const self = this;
        const self2 = this;
        const _default1 = new _default(tmp, getScriptURL(), assetByID);
        if (items) {
          let tmp5 = tmp4;
          for (const item10021 of tmp4) {
            let item10021Result = item10021(_default1);
            if (null != item10021Result) {
              obj2.return();
              return item10021Result;
            }
          }
        }
        return _default1.defaultAsset();
      } else {
        return null;
      }
    }
  }
  return channelIcon;
}
let items = [];
resolveAssetSource.pickScale = pickScale.pickScale;
resolveAssetSource.setCustomSourceTransformer = function setCustomSourceTransformer(arg0) {
  items = [arg0];
};
resolveAssetSource.addCustomSourceTransformer = function addCustomSourceTransformer(arg0) {
  items.push(arg0);
};

export default resolveAssetSource;
