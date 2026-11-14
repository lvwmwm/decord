// Module ID: 9179
// Function ID: 9180
// Name: PopularMusicSystemMessageCopy
// Dependencies: [9178, 2603, 2]
// Exports: getMobileMusicSystemMessage, getMusicSystemMessage

// Module 9179 (PopularMusicSystemMessageCopy)
import _modDef2603 from "module_2603" /* 2603 */;
import PopularMusicSystemMessageTypes from "PopularMusicSystemMessageTypes" /* 9178 */;
import size from "module_2" /* 2 */;

function getMusicSystemMessageFor(trackTitle, name, BlHpAk) {
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
  str3 = name;
  if (name == null) {
    str3 = "";
  }
  const event = trackTitle.event;
  if (PopularMusicSystemMessageTypes.GuildSpaceMusicEvent.TOP_SONG_CHANGED === event) {
    let Cf11AE;
    if (null != trackTitle.trackTitle) {
      Cf11AE = _modDef2603.vqPR3w;
    } else {
      Cf11AE = _modDef2603.Cf11AE;
    }
    return { message: Cf11AE, values: obj };
  } else if (PopularMusicSystemMessageTypes.GuildSpaceMusicEvent.TOP_ARTIST_CHANGED === event) {
    let ygm9YB;
    if (null != trackTitle.artistName) {
      ygm9YB = _modDef2603.ZbrKrk;
    } else {
      ygm9YB = _modDef2603.ygm9YB;
    }
    return { message: ygm9YB, values: obj };
  } else if (PopularMusicSystemMessageTypes.GuildSpaceMusicEvent.TOP_LISTENER_CHANGED === event) {
    let OlxQF3;
    if (null == name) {
      OlxQF3 = _modDef2603.OlxQF3;
    } else {
      OlxQF3 = BlHpAk;
    }
    return { message: OlxQF3, values: obj };
  } else {
    return null;
  }
}
const result = size.fileFinishedImporting("modules/guild_space/popular_music/PopularMusicSystemMessageCopy.tsx");

export function getMusicSystemMessage(result, name) {
  return getMusicSystemMessageFor(result, name, _modDef2603["k41/aX"]);
}
export function getMobileMusicSystemMessage(result, name) {
  return getMusicSystemMessageFor(result, name, _modDef2603.BlHpAk);
}
