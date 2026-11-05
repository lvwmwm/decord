// Module ID: 10946
// Function ID: 10947
// Name: isListeningOnSpotify
// Dependencies: [1072, 9057, 5899, 6712, 2]
// Exports: default

// Module 10946 (isListeningOnSpotify)
import Constants from "Constants" /* 1072 */;
import ActivityTypes from "ActivityTypes" /* 5899 */;
import PlatformsDefault from "Platforms" /* 6712 */;
import SpotifyConstants from "SpotifyConstants" /* 9057 */;
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
