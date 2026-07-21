// Module ID: 9073
// Function ID: 71143
// Name: isListeningOnSpotify
// Dependencies: []
// Exports: default

// Module 9073 (isListeningOnSpotify)
const _module = require(dependencyMap[0]);
({ ActivityTypes: closure_2, PlatformTypes: closure_3 } = _module);
const isSpotifyParty = require(dependencyMap[1]).isSpotifyParty;
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/activities/utils/isListeningOnSpotify.tsx");

export default function isListeningOnSpotify(type) {
  let tmp = null != type;
  if (tmp) {
    tmp = type.type === constants.LISTENING;
  }
  if (tmp) {
    tmp = type.name === importDefault(dependencyMap[2]).get(constants2.SPOTIFY).name;
    const obj = importDefault(dependencyMap[2]);
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
