// Module ID: 11941
// Function ID: 92366
// Name: PlatformTypes
// Dependencies: [653, 11940, 9011, 4815, 8117, 11925, 11926, 11942, 11943, 2]
// Exports: default

// Module 11941 (PlatformTypes)
import { PlatformTypes } from "ME";
import set from "isListeningOnSpotify";

const items = [, , , ];
({ LEAGUE_OF_LEGENDS: arr[0], ROBLOX: arr[1], TWITCH: arr[2], YOUTUBE: arr[3] } = PlatformTypes);
let set = new Set(items);
const result = set.fileFinishedImporting("modules/user_profile/utils/getActivityPlatform.tsx");

export default function getActivityPlatform(session_id) {
  const importDefault = session_id;
  const tmp = importDefault(11940)(session_id.session_id);
  if (null != tmp) {
    return tmp;
  } else if (importDefault(9011)(session_id)) {
    return tmp24(4815).get(PlatformTypes.SPOTIFY);
  } else if (tmp24(8117)(session_id)) {
    return tmp2(4815).get(PlatformTypes.CRUNCHYROLL);
  } else if (tmp2(11925)(session_id)) {
    return tmp4(4815).get(PlatformTypes.XBOX);
  } else if (tmp4(11926)(session_id)) {
    return tmp6(4815).get(PlatformTypes.PLAYSTATION);
  } else {
    if (!tmp6(11942)(session_id)) {
      if (!importDefault(11943)(session_id)) {
        const found = importDefault(4815).find((name) => name.name === session_id.name);
        let tmp13 = null;
        if (null != found) {
          tmp13 = null;
          if (set.has(found.type)) {
            tmp13 = found;
          }
        }
        return tmp13;
      }
    }
    return importDefault(4815).get(PlatformTypes.META_QUEST_OR_HORIZON);
  }
};
