// Module ID: 11377
// Function ID: 11378
// Name: isListeningOnSpotify
// Dependencies: [1071, 7632, 6015, 6178, 2]
// Exports: default

// Module 11377 (isListeningOnSpotify)
import Constants from "Constants" /* 1071 */;
import ActivityTypes from "ActivityTypes" /* 6015 */;
import PlatformsDefault from "Platforms" /* 6178 */;
import SpotifyConstants from "SpotifyConstants" /* 7632 */;
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
