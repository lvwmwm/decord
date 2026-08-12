// Module ID: 13076
// Function ID: 13077
// Name: getIconURL
// Dependencies: [4367, 1236, 5040, 2]

// Module 13076 (getIconURL)
import "createExecutable";

const require = arg1;
let c3 = "twitch:";
const result = require("getPlatformUserUrl").fileFinishedImporting("records/TwitchApplicationRecord.tsx");
class TwitchApplicationRecord extends tmp2 {
  constructor(arg0) {
    tmp3 = new TwitchApplicationRecord(global, tmp2, tmp, new.target);
    // ThrowIfThisInitialized (0x7c)
    tmp3.id = "" + c3 + global.url;
    intl = require("getSystemLocale").intl;
    tmp3.name = intl.string(require("getSystemLocale").t.JIPtgq);
    return tmp3;
  }
}
TwitchApplicationRecord.prototype["getIconURL"] = function getIconURL() {
  return importDefault(5040).get("twitch").icon.lightPNG;
};

export default TwitchApplicationRecord;
export const TWITCH_APPLICATION_ID_PREFIX = "twitch:";
