// Module ID: 8352
// Function ID: 66004
// Name: isSpotifyEntry
// Dependencies: [653, 8353, 8355, 8356, 8358, 8359, 7906, 2]
// Exports: findMatchingEntry

// Module 8352 (isSpotifyEntry)
import { ActivityTypes } from "ME";
import { CRUNCHYROLL_CLIENT_ID } from "CRUNCHYROLL_LINK_DEST_ORIGIN";
import { isSpotifyParty } from "spotifyUtmParams";

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
    let tmp4 = provider === require(8358) /* ContentInventoryListenedMediaProvider */.ContentInventoryListenedMediaProvider.SPOTIFY;
  } else {
    const tmp3 = !require(8356) /* isPlayedGameEntry */.isTopArtistEntry(extra);
    tmp4 = !tmp3;
    if (!tmp3) {
      tmp4 = extra.extra.media.provider === require(8358) /* ContentInventoryListenedMediaProvider */.ContentInventoryListenedMediaProvider.SPOTIFY;
    }
    const obj2 = require(8356) /* isPlayedGameEntry */;
  }
  return tmp4;
}
function isCrunchyrollEntry(extra) {
  const tmp = !require(8356) /* isPlayedGameEntry */.isWatchedMediaEntry(extra);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = extra.extra.application_id === CRUNCHYROLL_CLIENT_ID;
  }
  return tmp2;
}
function isMatchingApplicationActivity(closure_0, type) {
  let name = type;
  let game_name = closure_0.extra;
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
function isMatchingListeningActivity(closure_0, party) {
  const tmp = isSpotifyEntry(closure_0);
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
function isMatchingWatchActivity(closure_0, details) {
  let tmp = !importDefault(8359)(details);
  if (!tmp) {
    tmp = !isCrunchyrollEntry(closure_0);
  }
  let tmp3 = !tmp;
  if (!tmp) {
    tmp3 = closure_0.extra.media_title === details.details;
  }
  return tmp3;
}
const result = require("spotifyUtmParams").fileFinishedImporting("modules/content_inventory/matchUtils.tsx");

export { isSpotifyEntry };
export { isCrunchyrollEntry };
export { isMatchingApplicationActivity };
export { isMatchingListeningActivity };
export { isMatchingWatchActivity };
export const findMatchingEntry = function findMatchingEntry(entries, activity) {
  const _require = activity;
  const found = entries.filter(_require(7906).isEntryActive);
  if (activity.type === ActivityTypes.PLAYING) {
    const found1 = found.filter(_require(8356).isGamingLikeEntry);
    let found2 = found1.find((arg0) => outer1_8(arg0, closure_0));
  } else if (activity.type === ActivityTypes.LISTENING) {
    const found3 = found.filter(_require(8356).isListenedSessionEntry);
    found2 = found3.find((arg0) => outer1_9(arg0, closure_0));
  } else if (activity.type === ActivityTypes.WATCHING) {
    const found4 = entries.filter(_require(8356).isWatchedMediaEntry);
    found2 = found4.find((arg0) => outer1_10(arg0, closure_0));
  }
  return found2;
};
