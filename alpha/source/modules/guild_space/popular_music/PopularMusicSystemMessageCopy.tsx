// Module ID: 8550
// Function ID: 8551
// Name: PopularMusicSystemMessageCopy
// Dependencies: [8549, 2571, 2]
// Exports: getMobileMusicSystemMessage, getMusicSystemMessage

// Module 8550 (PopularMusicSystemMessageCopy)
import _modDef2571 from "module_2571" /* 2571 */;
import PopularMusicSystemMessageTypes from "PopularMusicSystemMessageTypes" /* 8549 */;
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
      Cf11AE = _modDef2571.vqPR3w;
    } else {
      Cf11AE = _modDef2571.Cf11AE;
    }
    return { message: Cf11AE, values: obj };
  } else if (PopularMusicSystemMessageTypes.GuildSpaceMusicEvent.TOP_ARTIST_CHANGED === event) {
    let ygm9YB;
    if (null != trackTitle.artistName) {
      ygm9YB = _modDef2571.ZbrKrk;
    } else {
      ygm9YB = _modDef2571.ygm9YB;
    }
    return { message: ygm9YB, values: obj };
  } else if (PopularMusicSystemMessageTypes.GuildSpaceMusicEvent.TOP_LISTENER_CHANGED === event) {
    let OlxQF3;
    if (null == name) {
      OlxQF3 = _modDef2571.OlxQF3;
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
  return getMusicSystemMessageFor(result, name, _modDef2571["k41/aX"]);
}
export function getMobileMusicSystemMessage(result, name) {
  return getMusicSystemMessageFor(result, name, _modDef2571.BlHpAk);
}
