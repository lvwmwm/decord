// Module ID: 13401
// Function ID: 13402
// Name: isListeningOnSpotify
// Dependencies: [1071, 6778, 5533, 6572, 2]
// Exports: default

// Module 13401 (isListeningOnSpotify)
import Constants from "Constants" /* 1071 */;
import ActivityTypes from "ActivityTypes" /* 5533 */;
import PlatformsDefault from "Platforms" /* 6572 */;
import SpotifyConstants from "SpotifyConstants" /* 6778 */;
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
