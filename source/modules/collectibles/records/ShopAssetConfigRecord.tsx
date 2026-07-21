// Module ID: 6782
// Function ID: 53539
// Name: AssetDisplayConfigRecord
// Dependencies: []

// Module 6782 (AssetDisplayConfigRecord)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class AssetDisplayConfigRecord {
    constructor(arg0) {
      tmp = AssetDisplayConfigRecord(this, AssetDisplayConfigRecord);
      ({ desktop_max_height: this.desktopMaxHeight, mobile_max_height: this.mobileMaxHeight, responsive: this.responsive, background_style: this.backgroundStyle } = arg0);
      return;
    }
  }
  let closure_0 = AssetDisplayConfigRecord;
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
}();
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/collectibles/records/ShopAssetConfigRecord.tsx");

export const AssetDisplayConfigRecord = tmp2;
