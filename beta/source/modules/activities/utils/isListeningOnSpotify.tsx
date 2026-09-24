// Module ID: 11231
// Function ID: 11232
// Name: isListeningOnSpotify
// Dependencies: [1078, 8648, 5534, 2]
// Exports: default

// Module 11231 (isListeningOnSpotify)
import PlatformsDefault from "Platforms" /* 5534 */;
import SpotifyConstants from "SpotifyConstants" /* 8648 */;
import Constants from "Constants" /* 1078 */;
import size from "module_2" /* 2 */;

({ ActivityTypes: c2, PlatformTypes: c3 } = Constants);
const isSpotifyParty = SpotifyConstants.isSpotifyParty;
const result = size.fileFinishedImporting("modules/activities/utils/isListeningOnSpotify.tsx");

export default function isListeningOnSpotify(type) {
  let tmp = null != type;
  if (tmp) {
    tmp = type.type === constants.LISTENING;
  }
  if (tmp) {
    tmp = type.name === PlatformsDefault.get(constants2.SPOTIFY).name;
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
