// Module ID: 10719
// Function ID: 10720
// Name: isListeningOnSpotify
// Dependencies: [1084, 8868, 6561, 2]
// Exports: default

// Module 10719 (isListeningOnSpotify)
import PlatformsDefault from "Platforms" /* 6561 */;
import SpotifyConstants from "SpotifyConstants" /* 8868 */;
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ ActivityTypes: c2, PlatformTypes: c3 } = Constants);
const isSpotifyParty = SpotifyConstants.isSpotifyParty;
const result = size.fileFinishedImporting("modules/activities/utils/isListeningOnSpotify.tsx");

export default function isListeningOnSpotify(type) {
  let tmp = null != type && type.type === constants.LISTENING;
  if (tmp) {
    const name = type.name;
    const obj = PlatformsDefault;
    tmp = name === obj.get(constants2.SPOTIFY).name;
  }
  if (tmp) {
    tmp = null != type.party;
  }
  if (tmp) {
    tmp = null != type.party.id;
  }
  if (tmp) {
    tmp = isSpotifyParty(type.party.id);
  }
  return tmp;
};
