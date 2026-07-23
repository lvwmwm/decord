// Module ID: 94
// Function ID: 1532
// Name: getScaledAssetPath
// Dependencies: [6, 7, 95, 96, 106, 44]

// Module 94 (getScaledAssetPath)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
function getScaledAssetPath(scales) {
  const obj = require(95) /* pickScale */;
  const _default = require(96) /* PixelRatio */.default;
  let str = "";
  if (1 !== pickScaleResult) {
    str = `${"@" + tmp}x`;
  }
  pickScaleResult = obj.pickScale(scales.scales, require(96) /* PixelRatio */.default.get());
  return require(106) /* getBasePath */.getBasePath(scales) + "/" + scales.name + str + "." + scales.type;
}
const tmp2 = (() => {
  class AssetSourceResolver {
    constructor(arg0, arg1, arg2) {
      tmp = outer1_2(this, AssetSourceResolver);
      this.serverUrl = arg0;
      this.jsbundleUrl = arg1;
      this.asset = arg2;
      return;
    }
  }
  let obj = {
    key: "isLoadedFromServer",
    value: function isLoadedFromServer() {
      const self = this;
      let tmp = null != this.serverUrl;
      if (tmp) {
        tmp = "" !== self.serverUrl;
      }
      if (tmp) {
        tmp = "xml" !== self.asset.type;
      }
      return tmp;
    }
  };
  const items = [obj, , , , , , , , , ];
  obj = {
    key: "isLoadedFromFileSystem",
    value: function isLoadedFromFileSystem() {
      let tmp = null != this.jsbundleUrl;
      if (tmp) {
        const jsbundleUrl = this.jsbundleUrl;
        let startsWithResult;
        if (null != jsbundleUrl) {
          startsWithResult = jsbundleUrl.startsWith("file://");
        }
        tmp = startsWithResult;
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "defaultAsset",
    value: function defaultAsset() {
      const self = this;
      if (this.isLoadedFromServer()) {
        let assetServerURLResult = self.assetServerURL();
      } else if (null != self.asset.resolver) {
        assetServerURLResult = self.getAssetUsingResolver(self.asset.resolver);
      } else if (self.isLoadedFromFileSystem()) {
        assetServerURLResult = self.drawableFolderInBundle();
      } else {
        assetServerURLResult = self.resourceIdentifierWithoutScale();
      }
      return assetServerURLResult;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getAssetUsingResolver",
    value: function getAssetUsingResolver(resolver) {
      const self = this;
      if ("android" === resolver) {
        if (self.isLoadedFromFileSystem()) {
          let result = self.drawableFolderInBundle();
        } else {
          result = self.resourceIdentifierWithoutScale();
        }
        return result;
      } else if ("generic" === resolver) {
        return self.scaledAssetURLNearBundle();
      } else {
        const _Error = Error;
        const _JSON = JSON;
        const text = `Don't know how to get asset via provided resolver: ${resolver}`;
        const _JSON2 = JSON;
        const text1 = `${`Don't know how to get asset via provided resolver: ${resolver}`}
      Asset: ${JSON.stringify(self.asset, null, "\t")}`;
        const error = new Error(text1 + "\nPossible resolvers are:" + JSON.stringify(["android", "generic"], null, "\t"));
        throw error;
      }
    }
  };
  items[4] = {
    key: "assetServerURL",
    value: function assetServerURL() {
      let fromSource;
      let serverUrl;
      AssetSourceResolver(outer1_1[5])(null != this.serverUrl, "need server to load from");
      ({ fromSource, serverUrl } = this);
      return fromSource(serverUrl + outer1_4(this.asset) + "?platform=android&hash=" + this.asset.hash);
    }
  };
  items[5] = {
    key: "scaledAssetPath",
    value: function scaledAssetPath() {
      return this.fromSource(outer1_4(this.asset));
    }
  };
  items[6] = {
    key: "scaledAssetURLNearBundle",
    value: function scaledAssetURLNearBundle() {
      const self = this;
      const jsbundleUrl = this.jsbundleUrl;
      let str = "file://";
      if (null != jsbundleUrl) {
        str = jsbundleUrl;
      }
      return self.fromSource(str + outer1_4(self.asset).replace(/\.\.\//g, "_"));
    }
  };
  items[7] = {
    key: "resourceIdentifierWithoutScale",
    value: function resourceIdentifierWithoutScale() {
      AssetSourceResolver(outer1_1[5])(true, "resource identifiers work on Android");
      return this.fromSource(AssetSourceResolver(outer1_1[4]).getAndroidResourceIdentifier(this.asset));
    }
  };
  items[8] = {
    key: "drawableFolderInBundle",
    value: function drawableFolderInBundle() {
      const self = this;
      const jsbundleUrl = this.jsbundleUrl;
      let str = "file://";
      if (null != jsbundleUrl) {
        str = jsbundleUrl;
      }
      const asset = self.asset;
      const obj = AssetSourceResolver(outer1_1[2]);
      obj.pickScale(asset.scales, AssetSourceResolver(outer1_1[3]).default.get());
      const obj2 = AssetSourceResolver(outer1_1[4]);
      const text = `${obj2.getAndroidResourceFolderName(asset, tmp)}/`;
      const _default = AssetSourceResolver(outer1_1[3]).default;
      return self.fromSource(str + (`${obj2.getAndroidResourceFolderName(asset, tmp)}/` + AssetSourceResolver(outer1_1[4]).getAndroidResourceIdentifier(asset) + "." + asset.type));
    }
  };
  items[9] = {
    key: "fromSource",
    value: function fromSource(uri) {
      const obj = { __packager_asset: true, width: this.asset.width, height: this.asset.height, uri };
      const obj2 = AssetSourceResolver(outer1_1[2]);
      obj.scale = obj2.pickScale(this.asset.scales, AssetSourceResolver(outer1_1[3]).default.get());
      return obj;
    }
  };
  return callback(AssetSourceResolver, items);
})();
tmp2.pickScale = require("pickScale").pickScale;

export default tmp2;
