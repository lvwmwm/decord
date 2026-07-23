// Module ID: 9081
// Function ID: 71208
// Name: isListeningOnSpotify
// Dependencies: [653, 8311, 4814, 2]
// Exports: default

// Module 9081 (isListeningOnSpotify)
import ME from "ME";
import { isSpotifyParty } from "spotifyUtmParams";

let closure_2;
let closure_3;
({ ActivityTypes: closure_2, PlatformTypes: closure_3 } = ME);
const result = require("getPlatformUserUrl").fileFinishedImporting("modules/activities/utils/isListeningOnSpotify.tsx");

export default function isListeningOnSpotify(type) {
  let tmp = null != type;
  if (tmp) {
    tmp = type.type === constants.LISTENING;
  }
  if (tmp) {
    tmp = type.name === importDefault(4814).get(constants2.SPOTIFY).name;
    const obj = importDefault(4814);
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
