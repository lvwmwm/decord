// Module ID: 6794
// Function ID: 53616
// Name: CountdownTimerBlockRecord
// Dependencies: []

// Module 6794 (CountdownTimerBlockRecord)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class CountdownTimerBlockRecord {
    constructor(arg0) {
      tmp = closure_2(this, CountdownTimerBlockRecord);
      this.type = CountdownTimerBlockRecord(closure_1[2]).ShopBlockType.COUNTDOWN_TIMER;
      ({ title: this.title, body: this.body, banner_url: this.bannerUrl } = arg0);
      date = new Date(arg0.end_time);
      this.endTime = date;
      this.textColor = arg0.text_color;
      return;
    }
  }
  const arg1 = CountdownTimerBlockRecord;
  const items = [
    {
      key: "fromServer",
      value(end_time) {
        return new CountdownTimerBlockRecord(end_time);
      }
    }
  ];
  return callback(CountdownTimerBlockRecord, null, items);
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/collectibles/records/CountdownTimerBlockRecord.tsx");

export const CountdownTimerBlockRecord = tmp2;
