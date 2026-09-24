// Module ID: 13631
// Function ID: 13632
// Name: SpotifyApplicationRecord
// Dependencies: [2002, 5588, 2]

// Module 13631 (SpotifyApplicationRecord)
import ApplicationRecord from "ApplicationRecord" /* 2002 */;
import Platforms from "Platforms" /* 5588 */;

const spotify = "spotify";
const value = Platforms.get("spotify");
let closure_1 = value;
class SpotifyApplicationRecord extends tmp4 {
  constructor() {
    tmp1 = new tmp({}, new.target, tmp);
    tmp1.id = spotify;
    tmp1.name = closure_1.name;
    return tmp1;
  }
}
const prototype = SpotifyApplicationRecord.prototype;
prototype["getIconURL"] = function getIconURL() {
  return value.icon.lightPNG;
};
prototype["getWhiteIconURL"] = function getWhiteIconURL() {
  return value.icon.whitePNG;
};
const tmp6 = new "getWhiteIconURL"({}, tmp2, tmp);
tmp6.id = "spotify";
tmp6.name = value.name;
const size = fn(2);
const result = size.fileFinishedImporting("records/SpotifyApplicationRecord.tsx");

export default SpotifyApplicationRecord;
export const SPOTIFY_APPLICATION_ID = "spotify";
export const SpotifyApplication = tmp6;
