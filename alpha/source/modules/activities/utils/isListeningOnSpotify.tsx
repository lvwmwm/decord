// Module ID: 11331
// Function ID: 11332
// Name: isListeningOnSpotify
// Dependencies: [1071, 7601, 5984, 6147, 2]
// Exports: default

// Module 11331 (isListeningOnSpotify)
import Constants from "Constants" /* 1071 */;
import ActivityTypes from "ActivityTypes" /* 5984 */;
import PlatformsDefault from "Platforms" /* 6147 */;
import SpotifyConstants from "SpotifyConstants" /* 7601 */;
import size from "module_2" /* 2 */;

const PlatformTypes = Constants.PlatformTypes;
const isSpotifyParty = SpotifyConstants.isSpotifyParty;
const result = size.fileFinishedImporting("modules/activities/utils/isListeningOnSpotify.tsx");

export default function isListeningOnSpotify(type) {
  let tmp = null != type && type.type === ActivityTypes.ActivityTypes.LISTENING;
  if (tmp) {
    const name = type.name;
    const obj = PlatformsDefault;
    tmp = name === obj.get(PlatformTypes.SPOTIFY).name;
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
