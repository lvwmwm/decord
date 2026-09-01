// Module ID: 7317
// Function ID: 7318
// Name: fromServer
// Dependencies: [7318, 2]

// Module 7317 (fromServer)
import set from "set" /* 2 */;
import ShopBlockType from "ShopBlockType" /* 7318 */;

let prototype;
prototype = function CountdownTimerBlockRecord(end_time) {
  const obj = Object.create(new.target.prototype);
  obj.type = ShopBlockType.ShopBlockType.COUNTDOWN_TIMER;
  ({ title: tmp.title, body: tmp.body, banner_url: tmp.bannerUrl } = end_time);
  obj.endTime = new Date(end_time.end_time);
  obj.textColor = end_time.text_color;
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(end_time) {
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(prototype.prototype);
  obj.type = ShopBlockType.ShopBlockType.COUNTDOWN_TIMER;
  ({ title: tmp2.title, body: tmp2.body, banner_url: tmp2.bannerUrl } = end_time);
  obj.endTime = new Date(end_time.end_time);
  obj.textColor = end_time.text_color;
  return obj;
};
const result = set.fileFinishedImporting("modules/collectibles/records/CountdownTimerBlockRecord.tsx");

export const CountdownTimerBlockRecord = prototype;
