// Module ID: 10913
// Function ID: 10914
// Name: isListeningOnSpotify
// Dependencies: [1072, 9018, 5923, 6661, 2]
// Exports: default

// Module 10913 (isListeningOnSpotify)
import Constants from "Constants" /* 1072 */;
import ActivityTypes from "ActivityTypes" /* 5923 */;
import PlatformsDefault from "Platforms" /* 6661 */;
import SpotifyConstants from "SpotifyConstants" /* 9018 */;
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
