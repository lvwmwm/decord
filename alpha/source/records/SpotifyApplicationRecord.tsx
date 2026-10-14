// Module ID: 13909
// Function ID: 13910
// Name: SpotifyApplicationRecord
// Dependencies: [2022, 5768, 2]

// Module 13909 (SpotifyApplicationRecord)
import ApplicationRecord from "ApplicationRecord" /* 2022 */;
import Platforms from "Platforms" /* 5768 */;
import size from "module_2" /* 2 */;

let tmp2;
const spotify = "spotify";
const value = Platforms.get("spotify");
const map = value;
class SpotifyApplicationRecord extends ApplicationRecord {
  constructor() {
    const tmp2 = new tmp({}, new.target, tmp);
    tmp2.id = spotify;
    tmp2.name = map.name;
    return tmp2;
  }
  getIconURL() {
    return map.icon.lightPNG;
  }
  getWhiteIconURL() {
    return map.icon.whitePNG;
  }
}
const prototype = SpotifyApplicationRecord.prototype;
const tmp6 = new "getWhiteIconURL"({}, tmp2, tmp);
tmp6.id = "spotify";
tmp6.name = value.name;
const result = size.fileFinishedImporting("records/SpotifyApplicationRecord.tsx");

export default SpotifyApplicationRecord;
export const SPOTIFY_APPLICATION_ID = "spotify";
export const SpotifyApplication = tmp6;
