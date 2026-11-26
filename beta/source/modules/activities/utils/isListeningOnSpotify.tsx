// Module ID: 13527
// Function ID: 13528
// Name: isListeningOnSpotify
// Dependencies: [1071, 6897, 5652, 6691, 2]
// Exports: default

// Module 13527 (isListeningOnSpotify)
import Constants from "Constants" /* 1071 */;
import ActivityTypes from "ActivityTypes" /* 5652 */;
import PlatformsDefault from "Platforms" /* 6691 */;
import SpotifyConstants from "SpotifyConstants" /* 6897 */;
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
