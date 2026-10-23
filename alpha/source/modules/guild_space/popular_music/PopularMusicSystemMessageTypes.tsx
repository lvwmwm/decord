// Module ID: 8352
// Function ID: 8353
// Name: PopularMusicSystemMessageTypes
// Dependencies: [2]
// Exports: parseGuildSpaceMusicMessageData

// Module 8352 (PopularMusicSystemMessageTypes)
import size from "module_2" /* 2 */;

const GuildSpaceMusicEvent = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", TOP_SONG_CHANGED: 1, [1]: "TOP_SONG_CHANGED", TOP_ARTIST_CHANGED: 2, [2]: "TOP_ARTIST_CHANGED", TOP_LISTENER_CHANGED: 3, [3]: "TOP_LISTENER_CHANGED" };
const result = size.fileFinishedImporting("modules/guild_space/popular_music/PopularMusicSystemMessageTypes.tsx");

export { GuildSpaceMusicEvent };
export const parseGuildSpaceMusicMessageData = function parseGuildSpaceMusicMessageData(music) {
  let obj;
  let tmp3;
  let tmp4;
  let track_title;
  let user_id;
  let tmp = null;
  if (null != music) {
    tmp = null;
    if (null != music.event) {
      tmp = null;
      if (music.event !== obj.UNSPECIFIED) {
        tmp = null;
        if (music.event in tmp2) {
          obj = { event: null, trackTitle: tmp3, artistName: tmp4, userId: user_id };
          ({ event: obj.event, track_title } = music);
          tmp3 = null;
          if (null != track_title) {
            tmp3 = null;
            if (track_title.length > 0) {
              tmp3 = track_title;
            }
          }
          const artist_name = music.artist_name;
          tmp4 = null;
          if (null != artist_name) {
            tmp4 = null;
            if (artist_name.length > 0) {
              tmp4 = artist_name;
            }
          }
          user_id = music.user_id;
          if (user_id == null) {
            user_id = null;
          }
          tmp = obj;
        }
      }
    }
  }
  return tmp;
};
