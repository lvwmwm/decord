// Module ID: 9049
// Function ID: 9050
// Name: matchUtils
// Dependencies: [9050, 9052, 9053, 9055, 9056, 8859, 5896, 2]
// Exports: findMatchingEntry, isCrunchyrollEntry, isMatchingApplicationActivity, isMatchingWatchActivity, isSpotifyEntry

// Module 9049 (matchUtils)
import CrunchyrollConnectionConstants from "CrunchyrollConnectionConstants" /* 9050 */;
import SpotifyConstants from "SpotifyConstants" /* 9052 */;
import ContentInventoryTypes from "ContentInventoryTypes" /* 9053 */;
import isCrunchyrollActivityDefault from "isCrunchyrollActivity" /* 9056 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function isMatchingListeningActivity(extra, party) {
  let isTopArtistEntryResult;
  const obj = ContentInventoryTypes;
  if (obj.isListenedSessionEntry(extra)) {
    const first = extra.extra.entries[0];
    let provider;
    if (first != null) {
      const media = first.media;
      if (media != null) {
        provider = media.provider;
      }
    }
    isTopArtistEntryResult = provider === tmp(9055).ContentInventoryListenedMediaProvider.SPOTIFY;
  } else {
    const tmpResult = ContentInventoryTypes;
    isTopArtistEntryResult = tmpResult.isTopArtistEntry(extra) && extra.extra.media.provider === tmp(9055).ContentInventoryListenedMediaProvider.SPOTIFY;
  }
  let tmp9Result = isTopArtistEntryResult;
  if (tmp9Result) {
    party = party.party;
    let id;
    const tmp9 = isSpotifyParty;
    if (party != null) {
      id = party.id;
    }
    tmp9Result = tmp9(id);
  }
  return tmp9Result;
}
const CRUNCHYROLL_CLIENT_ID = CrunchyrollConnectionConstants.CRUNCHYROLL_CLIENT_ID;
const isSpotifyParty = SpotifyConstants.isSpotifyParty;
const result = size.fileFinishedImporting("modules/content_inventory/matchUtils.tsx");

export function isSpotifyEntry(extra) {
  let isTopArtistEntryResult;
  const obj = ContentInventoryTypes;
  if (obj.isListenedSessionEntry(extra)) {
    const first = extra.extra.entries[0];
    let provider;
    if (first != null) {
      const media = first.media;
      if (media != null) {
        provider = media.provider;
      }
    }
    isTopArtistEntryResult = provider === tmp(9055).ContentInventoryListenedMediaProvider.SPOTIFY;
  } else {
    const tmpResult = ContentInventoryTypes;
    isTopArtistEntryResult = tmpResult.isTopArtistEntry(extra) && extra.extra.media.provider === tmp(9055).ContentInventoryListenedMediaProvider.SPOTIFY;
  }
  return isTopArtistEntryResult;
}
export function isCrunchyrollEntry(extra) {
  const obj = ContentInventoryTypes;
  const isWatchedMediaEntryResult = obj.isWatchedMediaEntry(extra) && extra.extra.application_id === CRUNCHYROLL_CLIENT_ID;
  return isWatchedMediaEntryResult;
}
export function isMatchingApplicationActivity(extra, application_id) {
  extra = extra.extra;
  let tmp = null != extra;
  if (tmp) {
    let tmp3 = "application_id" in application_id && application_id.application_id === extra.application_id;
    if (!tmp3) {
      let tmp4;
      if ("game_name" in extra) {
        tmp4 = application_id.name === extra.game_name;
      } else {
        tmp4 = "activity_name" in extra && application_id.name === extra.activity_name;
      }
      tmp3 = tmp4;
    }
    tmp = tmp3;
  }
  return tmp;
}
export { isMatchingListeningActivity };
export function isMatchingWatchActivity(extra, details) {
  const tmp2 = isCrunchyrollActivityDefault(details);
  let tmp3 = !tmp2;
  if (tmp2) {
    const obj = ContentInventoryTypes;
    tmp3 = !(obj.isWatchedMediaEntry(extra) && extra.extra.application_id === CRUNCHYROLL_CLIENT_ID);
    const isWatchedMediaEntryResult = obj.isWatchedMediaEntry(extra) && extra.extra.application_id === CRUNCHYROLL_CLIENT_ID;
  }
  return !tmp3 && extra.extra.media_title === details.details;
}
export function findMatchingEntry(entries, activity) {
  let found2;
  _require = activity;
  let tmp = _require;
  let tmp2 = dependencyMap;
  const found = entries.filter(require("utils").isEntryActive);
  if (activity.type === require("ActivityTypes").ActivityTypes.PLAYING) {
    const found1 = found.filter(tmp(9053).isGamingLikeEntry);
    found2 = found1.find((extra) => {
      extra = extra.extra;
      let tmp2 = null != extra;
      if (tmp2) {
        let tmp3 = "application_id" in tmp && tmp.application_id === extra.application_id;
        if (!tmp3) {
          let tmp4;
          if ("game_name" in extra) {
            tmp4 = tmp.name === extra.game_name;
          } else {
            tmp4 = "activity_name" in extra && tmp.name === extra.activity_name;
          }
          tmp3 = tmp4;
        }
        tmp2 = tmp3;
      }
      return tmp2;
    });
  } else if (activity.type === tmp(5896).ActivityTypes.LISTENING) {
    const found3 = found.filter(tmp(9053).isListenedSessionEntry);
    found2 = found3.find((item) => isMatchingListeningActivity(item, activity));
  } else if (activity.type === tmp(5896).ActivityTypes.WATCHING) {
    const found4 = entries.filter(tmp(9053).isWatchedMediaEntry);
    found2 = found4.find((extra) => {
      const tmp3 = isCrunchyrollActivityDefault(activity);
      let tmp4 = !tmp3;
      const tmp = activity;
      if (tmp3) {
        const obj = ContentInventoryTypes;
        tmp4 = !(obj.isWatchedMediaEntry(extra) && extra.extra.application_id === CRUNCHYROLL_CLIENT_ID);
        const isWatchedMediaEntryResult = obj.isWatchedMediaEntry(extra) && extra.extra.application_id === CRUNCHYROLL_CLIENT_ID;
      }
      return !tmp4 && extra.extra.media_title === tmp.details;
    });
  }
  return found2;
}
