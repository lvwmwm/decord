// Module ID: 10252
// Function ID: 10253
// Name: isListeningOnSpotify
// Dependencies: [1085, 8458, 5763, 2]
// Exports: default

// Module 10252 (isListeningOnSpotify)
import PlatformsDefault from "Platforms" /* 5763 */;
import SpotifyConstants from "SpotifyConstants" /* 8458 */;
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
