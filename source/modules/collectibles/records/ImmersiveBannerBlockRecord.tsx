// Module ID: 6814
// Function ID: 53762
// Name: ImmersiveBannerBlockRecord
// Dependencies: [6, 7, 6805, 2]

// Module 6814 (ImmersiveBannerBlockRecord)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
const tmp2 = (() => {
  class ImmersiveBannerBlockRecord {
    constructor(arg0) {
      self = this;
      tmp = outer1_2(this, ImmersiveBannerBlockRecord);
      this.type = ImmersiveBannerBlockRecord(outer1_1[2]).ShopBlockType.IMMERSIVE_BANNER;
      ({ title: this.title, body: this.body, help_center_url: this.helpCenterUrl, text_color: this.textColor } = arg0);
      date = undefined;
      if (null != arg0.end_time) {
        tmp3 = globalThis;
        _Date = Date;
        prototype = Date.prototype;
        tmp4 = new.target;
        tmp5 = new.target;
        date = new Date(arg0.end_time);
      }
      self.endTime = date;
      ({ banner_url: self.bannerUrl, banner_animated_url: self.bannerAnimatedUrl } = arg0);
      return;
    }
  }
  const items = [
    {
      key: "fromServer",
      value(end_time) {
        return new ImmersiveBannerBlockRecord(end_time);
      }
    }
  ];
  return callback(ImmersiveBannerBlockRecord, null, items);
})();
const result = require("ShopBlockType").fileFinishedImporting("modules/collectibles/records/ImmersiveBannerBlockRecord.tsx");

export const ImmersiveBannerBlockRecord = tmp2;
