// Module ID: 6809
// Function ID: 53696
// Name: ImmersiveBannerBlockRecord
// Dependencies: []

// Module 6809 (ImmersiveBannerBlockRecord)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class ImmersiveBannerBlockRecord {
    constructor(arg0) {
      self = this;
      tmp = closure_2(this, ImmersiveBannerBlockRecord);
      this.type = ImmersiveBannerBlockRecord(closure_1[2]).ShopBlockType.IMMERSIVE_BANNER;
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
  const arg1 = ImmersiveBannerBlockRecord;
  const items = [
    {
      key: "fromServer",
      value(end_time) {
        return new ImmersiveBannerBlockRecord(end_time);
      }
    }
  ];
  return callback(ImmersiveBannerBlockRecord, null, items);
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/collectibles/records/ImmersiveBannerBlockRecord.tsx");

export const ImmersiveBannerBlockRecord = tmp2;
