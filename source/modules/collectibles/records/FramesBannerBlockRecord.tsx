// Module ID: 6806
// Function ID: 53684
// Name: FramesBannerBlockRecord
// Dependencies: []

// Module 6806 (FramesBannerBlockRecord)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class FramesBannerBlockRecord {
    constructor(arg0) {
      tmp = closure_2(this, FramesBannerBlockRecord);
      this.type = FramesBannerBlockRecord(closure_1[2]).ShopBlockType.FRAMES_BANNER;
      ({ title: this.title, body: this.body, mobile_background_image: this.mobileBackgroundImage, mobile_foreground_image: this.mobileForegroundImage, desktop_background_image: this.desktopBackgroundImage } = arg0);
      return;
    }
  }
  const arg1 = FramesBannerBlockRecord;
  const items = [
    {
      key: "fromServer",
      value(arg0) {
        return new FramesBannerBlockRecord(arg0);
      }
    }
  ];
  return callback(FramesBannerBlockRecord, null, items);
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/collectibles/records/FramesBannerBlockRecord.tsx");

export const FramesBannerBlockRecord = tmp2;
