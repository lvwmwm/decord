// Module ID: 15594
// Function ID: 15595
// Name: TwitchApplicationRecord
// Dependencies: [2017, 1114, 6568, 2]

// Module 15594 (TwitchApplicationRecord)
import intl2 from "intl" /* 1114 */;
import PlatformsDefault from "Platforms" /* 6568 */;
import ApplicationRecord from "ApplicationRecord" /* 2017 */;
import size from "module_2" /* 2 */;

let c3 = "twitch:";
const result = size.fileFinishedImporting("records/TwitchApplicationRecord.tsx");
class TwitchApplicationRecord extends ApplicationRecord {
  constructor(url) {
    const tmp3 = new TwitchApplicationRecord(url, tmp2, tmp, new.target);
    tmp3.id = "" + c3 + url.url;
    const intl = intl2.intl;
    tmp3.name = intl.string(intl2.t.JIPtgq);
    return tmp3;
  }
  getIconURL() {
    const obj = PlatformsDefault;
    return obj.get("twitch").icon.lightPNG;
  }
}
const prototype = TwitchApplicationRecord.prototype;

export default TwitchApplicationRecord;
export const TWITCH_APPLICATION_ID_PREFIX = "twitch:";
