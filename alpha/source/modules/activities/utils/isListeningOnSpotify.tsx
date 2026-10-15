// Module ID: 10476
// Function ID: 10477
// Name: isListeningOnSpotify
// Dependencies: [1085, 8677, 5979, 2]
// Exports: default

// Module 10476 (isListeningOnSpotify)
import PlatformsDefault from "Platforms" /* 5979 */;
import SpotifyConstants from "SpotifyConstants" /* 8677 */;
import Constants from "Constants" /* 1085 */;
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
