// Module ID: 10742
// Function ID: 10743
// Name: isListeningOnSpotify
// Dependencies: [1072, 8902, 5757, 6568, 2]
// Exports: default

// Module 10742 (isListeningOnSpotify)
import Constants from "Constants" /* 1072 */;
import ActivityTypes from "ActivityTypes" /* 5757 */;
import PlatformsDefault from "Platforms" /* 6568 */;
import SpotifyConstants from "SpotifyConstants" /* 8902 */;
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
