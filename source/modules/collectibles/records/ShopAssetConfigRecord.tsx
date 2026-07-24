// Module ID: 6787
// Function ID: 53607
// Name: AssetDisplayConfigRecord
// Dependencies: [6, 7, 2]

// Module 6787 (AssetDisplayConfigRecord)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const tmp2 = (() => {
  class AssetDisplayConfigRecord {
    constructor(arg0) {
      tmp = AssetDisplayConfigRecord(this, AssetDisplayConfigRecord);
      ({ desktop_max_height: this.desktopMaxHeight, mobile_max_height: this.mobileMaxHeight, responsive: this.responsive, background_style: this.backgroundStyle } = arg0);
      return;
    }
  }
  let obj = {
    key: "toDesktopStyles",
    value() {
      const self = this;
      const obj = {};
      if (null != this.desktopMaxHeight) {
        obj.maxHeight = self.desktopMaxHeight;
      }
      if (null != self.backgroundStyle) {
        obj.background = self.backgroundStyle;
      }
      let tmp;
      if (Object.keys(obj).length > 0) {
        tmp = obj;
      }
      return tmp;
    }
  };
  const items = [obj, ];
  obj = {
    key: "toMobileStyles",
    value() {
      const self = this;
      const obj = {};
      if (null != this.mobileMaxHeight) {
        obj.maxHeight = self.mobileMaxHeight;
      }
      if (null != self.backgroundStyle) {
        obj.background = self.backgroundStyle;
      }
      let tmp;
      if (Object.keys(obj).length > 0) {
        tmp = obj;
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "fromServer",
    value(arg0) {
      return new AssetDisplayConfigRecord(arg0);
    }
  };
  const items1 = [obj];
  return callback(AssetDisplayConfigRecord, items, items1);
})();
const result = require("set").fileFinishedImporting("modules/collectibles/records/ShopAssetConfigRecord.tsx");

export const AssetDisplayConfigRecord = tmp2;
