// Module ID: 10822
// Function ID: 10823
// Name: isListeningOnSpotify
// Dependencies: [673, 8270, 5244, 2]
// Exports: default

// Module 10822 (isListeningOnSpotify)
import set from "set" /* 2 */;
import getPlatformUserUrlDefault from "getPlatformUserUrl" /* 5244 */;
import SPOTIFY_APP_PROTOCOL from "SPOTIFY_APP_PROTOCOL" /* 8270 */;
import ME from "ME" /* 673 */;

({ ActivityTypes: obj1, PlatformTypes: c3 } = ME);
const isSpotifyParty = SPOTIFY_APP_PROTOCOL.isSpotifyParty;
const result = set.fileFinishedImporting("modules/activities/utils/isListeningOnSpotify.tsx");

export default function isListeningOnSpotify(type) {
  let tmp = null != type;
  if (tmp) {
    tmp = type.type === constants.LISTENING;
  }
  if (tmp) {
    tmp = type.name === getPlatformUserUrlDefault.get(constants2.SPOTIFY).name;
    const obj = getPlatformUserUrlDefault;
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
