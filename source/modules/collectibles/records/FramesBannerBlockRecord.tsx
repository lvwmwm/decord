// Module ID: 6810
// Function ID: 53746
// Name: FramesBannerBlockRecord
// Dependencies: [6, 7, 6805, 2]

// Module 6810 (FramesBannerBlockRecord)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
const tmp2 = (() => {
  class FramesBannerBlockRecord {
    constructor(arg0) {
      tmp = outer1_2(this, FramesBannerBlockRecord);
      this.type = FramesBannerBlockRecord(outer1_1[2]).ShopBlockType.FRAMES_BANNER;
      ({ title: this.title, body: this.body, mobile_background_image: this.mobileBackgroundImage, mobile_foreground_image: this.mobileForegroundImage, desktop_background_image: this.desktopBackgroundImage } = arg0);
      return;
    }
  }
  const items = [
    {
      key: "fromServer",
      value(arg0) {
        return new FramesBannerBlockRecord(arg0);
      }
    }
  ];
  return callback(FramesBannerBlockRecord, null, items);
})();
const result = require("ShopBlockType").fileFinishedImporting("modules/collectibles/records/FramesBannerBlockRecord.tsx");

export const FramesBannerBlockRecord = tmp2;
