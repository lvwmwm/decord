// Module ID: 13293
// Function ID: 13294
// Name: TwitchApplicationRecord
// Dependencies: [2003, 1115, 5595, 2]

// Module 13293 (TwitchApplicationRecord)
import intl2 from "intl" /* 1115 */;
import PlatformsDefault from "Platforms" /* 5595 */;
import ApplicationRecord from "ApplicationRecord" /* 2003 */;
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
