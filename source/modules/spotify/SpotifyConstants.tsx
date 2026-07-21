// Module ID: 8304
// Function ID: 65739
// Name: spotifyUtmParams
// Dependencies: []
// Exports: getSpotifyResourceType, isSpotifyParty

// Module 8304 (spotifyUtmParams)
function spotifyUtmParams(desktop) {
  return "?utm_source=discord&utm_medium=" + desktop;
}
let obj = { TRACK: "track", ARTIST: "artist", ALBUM: "album", PLAYLIST: "playlist", EPISODE: "episode", SHOW: "show" };
obj = {
  PROFILE: "" + "https://api.spotify.com/v1" + "/me",
  NOTIFICATIONS_PLAYER: "" + "https://api.spotify.com/v1" + "/me/notifications/player",
  PLAYER: "" + "https://api.spotify.com/v1" + "/me/player",
  PLAYER_DEVICES: "" + "https://api.spotify.com/v1" + "/me/player/devices",
  PLAYER_PLAY: "" + "https://api.spotify.com/v1" + "/me/player/play",
  PLAYER_PAUSE: "" + "https://api.spotify.com/v1" + "/me/player/pause",
  PLAYER_REPEAT: "" + "https://api.spotify.com/v1" + "/me/player/repeat",
  WEB_OPEN(TRACK, sync_id, mobile) {
    let str = mobile;
    if (mobile === undefined) {
      str = "desktop";
    }
    const encodeURIComponentResult = encodeURIComponent(TRACK);
    return "https://open.spotify.com/" + encodeURIComponentResult + "/" + encodeURIComponent(sync_id) + spotifyUtmParams(str);
  },
  EMBED(arg0, desktop) {
    let str = desktop;
    if (desktop === undefined) {
      str = "desktop";
    }
    return "https://open.spotify.com/embed" + arg0 + spotifyUtmParams(str);
  },
  PLAYER_OPEN(TRACK, sync_id, arg2, mobile) {
    let flag = arg2;
    let str = mobile;
    if (arg2 === undefined) {
      flag = true;
    }
    if (str === undefined) {
      str = "desktop";
    }
    const encodeURIComponentResult = encodeURIComponent(TRACK);
    let str2 = "";
    if (flag) {
      str2 = spotifyUtmParams(str);
    }
    return "" + "spotify" + ":" + encodeURIComponentResult + ":" + encodeURIComponent(sync_id) + str2;
  },
  PREMIUM_SITE: "https://www.spotify.com/premium/" + spotifyUtmParams("desktop"),
  INSTALL_ATTRIBUTION(Identifier) {
    return "https://app.adjust.com/bdyga9?campaign=" + Identifier;
  }
};
const importDefaultResult = importDefault(dependencyMap[1]);
let str = "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8";
if (obj4.isAndroid()) {
  str = "https://play.google.com/store/apps/details?id=com.spotify.music&hl=en_US&gl=US";
}
obj.APP_STORE = str;
obj.IOS_APP_STORE = "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8";
const frozen = Object.freeze(obj);
const obj4 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/spotify/SpotifyConstants.tsx");

export const SPOTIFY_APP_PROTOCOL = "spotify";
export const SPOTIFY_PARTY_PREFIX = "spotify:";
export const SPOTIFY_PLATFORM_NAME = importDefaultResult.get(arg1(dependencyMap[0]).PlatformTypes.SPOTIFY).name;
export const isSpotifyParty = function isSpotifyParty(id) {
  let startsWithResult = null != id;
  if (startsWithResult) {
    startsWithResult = id.startsWith("spotify:");
  }
  return startsWithResult;
};
export const SpotifyResourceTypes = obj;
export const SpotifyActionTypes = { USER_ACTIVITY_PLAY: "user_activity_play", USER_ACTIVITY_SYNC: "user_activity_sync", EMBED_SYNC: "embed_sync" };
export const SPOTIFY_HOSTNAMES = ["text", "value"];
export const SpotifyEndpoints = frozen;
export const getSpotifyResourceType = function getSpotifyResourceType(arg0) {
  if ("string" !== typeof arg0) {
    return null;
  } else if ("track" === arg0) {
    return obj.TRACK;
  } else if ("artist" === arg0) {
    return obj.ARTIST;
  } else if ("album" === arg0) {
    return obj.ALBUM;
  } else if ("playlist" === arg0) {
    return obj.PLAYLIST;
  } else if ("episode" === arg0) {
    return obj.EPISODE;
  } else if ("show" === arg0) {
    return obj.SHOW;
  } else {
    return null;
  }
};
