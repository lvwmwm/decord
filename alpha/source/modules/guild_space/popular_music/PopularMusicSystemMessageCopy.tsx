// Module ID: 8340
// Function ID: 8341
// Name: PopularMusicSystemMessageCopy
// Dependencies: [8339, 2440, 2]
// Exports: getMobileMusicSystemMessage, getMusicSystemMessage

// Module 8340 (PopularMusicSystemMessageCopy)
import _modDef2440 from "module_2440" /* 2440 */;
import PopularMusicSystemMessageTypes from "PopularMusicSystemMessageTypes" /* 8339 */;
import size from "module_2" /* 2 */;

function getMusicSystemMessageFor(trackTitle, name2, BlHpAk) {
  let str2;
  let str3;
  let str = trackTitle.trackTitle;
  if (str == null) {
    str = "";
  }
  const obj = { trackTitle: str, artistName: str2, username: str3 };
  str2 = trackTitle.artistName;
  if (str2 == null) {
    str2 = "";
  }
  str3 = name2;
  if (name2 == null) {
    str3 = "";
  }
  const event = trackTitle.event;
  if (PopularMusicSystemMessageTypes.GuildSpaceMusicEvent.TOP_SONG_CHANGED === event) {
    let Cf11AE;
    if (null != trackTitle.trackTitle) {
      Cf11AE = _modDef2440.vqPR3w;
    } else {
      Cf11AE = _modDef2440.Cf11AE;
    }
    return { message: Cf11AE, values: obj };
  } else if (PopularMusicSystemMessageTypes.GuildSpaceMusicEvent.TOP_ARTIST_CHANGED === event) {
    let ygm9YB;
    if (null != trackTitle.artistName) {
      ygm9YB = _modDef2440.ZbrKrk;
    } else {
      ygm9YB = _modDef2440.ygm9YB;
    }
    return { message: ygm9YB, values: obj };
  } else if (PopularMusicSystemMessageTypes.GuildSpaceMusicEvent.TOP_LISTENER_CHANGED === event) {
    let OlxQF3;
    if (null == name2) {
      OlxQF3 = _modDef2440.OlxQF3;
    } else {
      OlxQF3 = BlHpAk;
    }
    return { message: OlxQF3, values: obj };
  } else {
    return null;
  }
}
const result = size.fileFinishedImporting("modules/guild_space/popular_music/PopularMusicSystemMessageCopy.tsx");

export const getMusicSystemMessage = function getMusicSystemMessage(result, name2) {
  return getMusicSystemMessageFor(result, name2, _modDef2440["k41/aX"]);
};
export const getMobileMusicSystemMessage = function getMobileMusicSystemMessage(result, name) {
  return getMusicSystemMessageFor(result, name, _modDef2440.BlHpAk);
};
