// Module ID: 11939
// Function ID: 92325
// Name: PlatformTypes
// Dependencies: [653, 11938, 9081, 4814, 8315, 11922, 11923, 11940, 11941, 2]
// Exports: default

// Module 11939 (PlatformTypes)
import { PlatformTypes } from "ME";
import set from "isListeningOnSpotify";

const items = [, , , ];
({ LEAGUE_OF_LEGENDS: arr[0], ROBLOX: arr[1], TWITCH: arr[2], YOUTUBE: arr[3] } = PlatformTypes);
let set = new Set(items);
const result = set.fileFinishedImporting("modules/user_profile/utils/getActivityPlatform.tsx");

export default function getActivityPlatform(session_id) {
  const importDefault = session_id;
  const tmp = importDefault(11938)(session_id.session_id);
  if (null != tmp) {
    return tmp;
  } else if (importDefault(9081)(session_id)) {
    return tmp24(4814).get(PlatformTypes.SPOTIFY);
  } else if (tmp24(8315)(session_id)) {
    return tmp2(4814).get(PlatformTypes.CRUNCHYROLL);
  } else if (tmp2(11922)(session_id)) {
    return tmp4(4814).get(PlatformTypes.XBOX);
  } else if (tmp4(11923)(session_id)) {
    return tmp6(4814).get(PlatformTypes.PLAYSTATION);
  } else {
    if (!tmp6(11940)(session_id)) {
      if (!importDefault(11941)(session_id)) {
        const found = importDefault(4814).find((name) => name.name === session_id.name);
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
    return importDefault(4814).get(PlatformTypes.META_QUEST_OR_HORIZON);
  }
};
