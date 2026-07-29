// Module ID: 5834
// Function ID: 5835
// Name: fromServer
// Dependencies: [5829, 2]

// Module 5834 (fromServer)
let prototype;
prototype = function FramesBannerBlockRecord(arg0) {
  const obj = Object.create(new.target.prototype);
  obj.type = require(5829) /* ShopBlockType */.ShopBlockType.FRAMES_BANNER;
  ({ title: tmp.title, body: tmp.body, mobile_background_image: tmp.mobileBackgroundImage, mobile_foreground_image: tmp.mobileForegroundImage, desktop_background_image: tmp.desktopBackgroundImage } = arg0);
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(arg0) {
  if (typeof prototype !== "find") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(prototype.prototype);
  obj.type = require(5829) /* ShopBlockType */.ShopBlockType.FRAMES_BANNER;
  ({ title: tmp2.title, body: tmp2.body, mobile_background_image: tmp2.mobileBackgroundImage, mobile_foreground_image: tmp2.mobileForegroundImage, desktop_background_image: tmp2.desktopBackgroundImage } = arg0);
  return obj;
};
const result = require("set").fileFinishedImporting("modules/collectibles/records/FramesBannerBlockRecord.tsx");

export const FramesBannerBlockRecord = prototype;
