// Module ID: 8237
// Function ID: 8238
// Name: PopularMusicSystemMessageCopy
// Dependencies: [8236, 2475, 2]
// Exports: getMobileMusicSystemMessage, getMusicSystemMessage

// Module 8237 (PopularMusicSystemMessageCopy)
import _modDef2475 from "module_2475" /* 2475 */;
import PopularMusicSystemMessageTypes from "PopularMusicSystemMessageTypes" /* 8236 */;
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
      Cf11AE = _modDef2475.vqPR3w;
    } else {
      Cf11AE = _modDef2475.Cf11AE;
    }
    return { message: Cf11AE, values: obj };
  } else if (PopularMusicSystemMessageTypes.GuildSpaceMusicEvent.TOP_ARTIST_CHANGED === event) {
    let ygm9YB;
    if (null != trackTitle.artistName) {
      ygm9YB = _modDef2475.ZbrKrk;
    } else {
      ygm9YB = _modDef2475.ygm9YB;
    }
    return { message: ygm9YB, values: obj };
  } else if (PopularMusicSystemMessageTypes.GuildSpaceMusicEvent.TOP_LISTENER_CHANGED === event) {
    let OlxQF3;
    if (null == name2) {
      OlxQF3 = _modDef2475.OlxQF3;
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
  return getMusicSystemMessageFor(result, name2, _modDef2475["k41/aX"]);
};
export const getMobileMusicSystemMessage = function getMobileMusicSystemMessage(result, name) {
  return getMusicSystemMessageFor(result, name, _modDef2475.BlHpAk);
};
