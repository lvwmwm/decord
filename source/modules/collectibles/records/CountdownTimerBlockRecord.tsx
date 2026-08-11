// Module ID: 7034
// Function ID: 7035
// Name: fromServer
// Dependencies: [7035, 2]

// Module 7034 (fromServer)
let prototype;
prototype = function CountdownTimerBlockRecord(end_time) {
  const obj = Object.create(new.target.prototype);
  obj.type = require(7035) /* ShopBlockType */.ShopBlockType.COUNTDOWN_TIMER;
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
  obj.type = require(7035) /* ShopBlockType */.ShopBlockType.COUNTDOWN_TIMER;
  ({ title: tmp2.title, body: tmp2.body, banner_url: tmp2.bannerUrl } = end_time);
  obj.endTime = new Date(end_time.end_time);
  obj.textColor = end_time.text_color;
  return obj;
};
const result = require("set").fileFinishedImporting("modules/collectibles/records/CountdownTimerBlockRecord.tsx");

export const CountdownTimerBlockRecord = prototype;
