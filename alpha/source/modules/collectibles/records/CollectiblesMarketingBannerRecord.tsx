// Module ID: 7288
// Function ID: 7289
// Name: CollectiblesMarketingBannerRecord
// Dependencies: [7287, 2]

// Module 7288 (CollectiblesMarketingBannerRecord)
import CollectiblesMarketingType from "CollectiblesMarketingType" /* 7287 */;
import size from "module_2" /* 2 */;

class CollectiblesMarketingBannerRecord {
  constructor(arg0) {
    const obj = Object.create(new.target.prototype);
    obj.type = CollectiblesMarketingType.CollectiblesMarketingType.BANNER;
    ({ title: tmp.title, body: tmp.body, asset: tmp.asset, popout_asset: tmp.popoutAsset, version: tmp.version, revert_text_color: tmp.revertTextColor } = arg0);
    return obj;
  }
  static fromServer(arg0) {
    if (typeof CollectiblesMarketingBannerRecord === "function") {
      const obj = Object.create(tmp.prototype);
      obj.type = CollectiblesMarketingType.CollectiblesMarketingType.BANNER;
      ({ title: tmp3.title, body: tmp3.body, asset: tmp3.asset, popout_asset: tmp3.popoutAsset, version: tmp3.version, revert_text_color: tmp3.revertTextColor } = arg0);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  static fromPersisted(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    ({ popoutAsset: obj.popout_asset, revertTextColor: obj.revert_text_color } = arg0);
    const tmp = CollectiblesMarketingBannerRecord;
    if (typeof CollectiblesMarketingBannerRecord === "function") {
      const obj2 = Object.create(tmp.prototype);
      obj2.type = CollectiblesMarketingType.CollectiblesMarketingType.BANNER;
      ({ title: tmp3.title, body: tmp3.body, asset: tmp3.asset, popout_asset: tmp3.popoutAsset, version: tmp3.version, revert_text_color: tmp3.revertTextColor } = obj);
      return obj2;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesMarketingBannerRecord.tsx");

export { CollectiblesMarketingBannerRecord };
