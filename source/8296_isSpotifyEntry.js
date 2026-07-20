// Module ID: 8296
// Function ID: 65702
// Name: isSpotifyEntry
// Dependencies: []
// Exports: findMatchingEntry

// Module 8296 (isSpotifyEntry)
function isSpotifyEntry(extra) {
  if (obj.isListenedSessionEntry(extra)) {
    const first = extra.extra.entries[0];
    let provider;
    if (null != first) {
      const media = first.media;
      if (null != media) {
        provider = media.provider;
      }
    }
    let tmp4 = provider === require(dependencyMap[4]).ContentInventoryListenedMediaProvider.SPOTIFY;
  } else {
    const tmp3 = !require(dependencyMap[3]).isTopArtistEntry(extra);
    tmp4 = !tmp3;
    if (!tmp3) {
      tmp4 = extra.extra.media.provider === require(dependencyMap[4]).ContentInventoryListenedMediaProvider.SPOTIFY;
    }
    const obj2 = require(dependencyMap[3]);
  }
  return tmp4;
}
function isCrunchyrollEntry(extra) {
  const tmp = !require(dependencyMap[3]).isWatchedMediaEntry(extra);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = extra.extra.application_id === CRUNCHYROLL_CLIENT_ID;
  }
  return tmp2;
}
function isMatchingApplicationActivity(extra, type) {
  let name = type;
  let game_name = extra.extra;
  let tmp = null != game_name;
  if (tmp) {
    if ("application_id" in name && name.application_id === game_name.application_id) {
      tmp = tmp2;
    } else if ("game_name" in game_name) {
      name = name.name;
      game_name = game_name.game_name;
      let tmp3 = name === game_name;
    } else {
      tmp3 = "activity_name" in game_name && name.name === game_name.activity_name;
    }
  }
  return tmp;
}
function isMatchingListeningActivity(extra, party) {
  const tmp = isSpotifyEntry(extra);
  let tmp3Result = tmp;
  if (tmp) {
    party = party.party;
    let id;
    if (null != party) {
      id = party.id;
    }
    tmp3Result = isSpotifyParty(id);
    const tmp3 = isSpotifyParty;
  }
  return tmp3Result;
}
function isMatchingWatchActivity(extra, details) {
  let tmp = !importDefault(dependencyMap[5])(details);
  if (!tmp) {
    tmp = !isCrunchyrollEntry(extra);
  }
  let tmp3 = !tmp;
  if (!tmp) {
    tmp3 = extra.extra.media_title === details.details;
  }
  return tmp3;
}
const ActivityTypes = require(dependencyMap[0]).ActivityTypes;
const CRUNCHYROLL_CLIENT_ID = require(dependencyMap[1]).CRUNCHYROLL_CLIENT_ID;
const isSpotifyParty = require(dependencyMap[2]).isSpotifyParty;
const _module = require(dependencyMap[7]);
const result = _module.fileFinishedImporting("modules/content_inventory/matchUtils.tsx");

export { isSpotifyEntry };
export { isCrunchyrollEntry };
export { isMatchingApplicationActivity };
export { isMatchingListeningActivity };
export { isMatchingWatchActivity };
export const findMatchingEntry = function findMatchingEntry(entries, activity) {
  const require = activity;
  const found = entries.filter(require(dependencyMap[6]).isEntryActive);
  if (activity.type === ActivityTypes.PLAYING) {
    const found1 = found.filter(require(dependencyMap[3]).isGamingLikeEntry);
    let found2 = found1.find((arg0) => callback(arg0, arg1));
  } else if (activity.type === ActivityTypes.LISTENING) {
    const found3 = found.filter(require(dependencyMap[3]).isListenedSessionEntry);
    found2 = found3.find((arg0) => callback2(arg0, arg1));
  } else if (activity.type === ActivityTypes.WATCHING) {
    const found4 = entries.filter(require(dependencyMap[3]).isWatchedMediaEntry);
    found2 = found4.find((arg0) => callback3(arg0, arg1));
  }
  return found2;
};
