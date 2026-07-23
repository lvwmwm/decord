// Module ID: 6805
// Function ID: 53716
// Name: CountdownTimerBlockRecord
// Dependencies: [6, 7, 6806, 2]

// Module 6805 (CountdownTimerBlockRecord)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
const tmp2 = (() => {
  class CountdownTimerBlockRecord {
    constructor(arg0) {
      tmp = outer1_2(this, CountdownTimerBlockRecord);
      this.type = CountdownTimerBlockRecord(outer1_1[2]).ShopBlockType.COUNTDOWN_TIMER;
      ({ title: this.title, body: this.body, banner_url: this.bannerUrl } = arg0);
      date = new Date(arg0.end_time);
      this.endTime = date;
      this.textColor = arg0.text_color;
      return;
    }
  }
  const items = [
    {
      key: "fromServer",
      value(end_time) {
        return new CountdownTimerBlockRecord(end_time);
      }
    }
  ];
  return callback(CountdownTimerBlockRecord, null, items);
})();
const result = require("ShopBlockType").fileFinishedImporting("modules/collectibles/records/CountdownTimerBlockRecord.tsx");

export const CountdownTimerBlockRecord = tmp2;
