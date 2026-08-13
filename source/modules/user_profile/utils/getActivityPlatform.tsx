// Module ID: 12360
// Function ID: 12361
// Name: PlatformTypes
// Dependencies: [676, 12359, 9703, 5041, 8956, 12346, 12347, 12361, 12362, 2]
// Exports: default

// Module 12360 (PlatformTypes)
import { PlatformTypes } from "ME";
import set from "isListeningOnSpotify";

const items = [, , , ];
({ LEAGUE_OF_LEGENDS: arr[0], ROBLOX: arr[1], TWITCH: arr[2], YOUTUBE: arr[3] } = PlatformTypes);
let set = new Set(items);
const result = set.fileFinishedImporting("modules/user_profile/utils/getActivityPlatform.tsx");

export default function getActivityPlatform(session_id) {
  const importDefault = session_id;
  const tmp3 = importDefault(12359)(session_id.session_id);
  if (null != tmp3) {
    return tmp3;
  } else if (tmp(9703)(session_id)) {
    let tmpResult = tmp(5041);
    return tmpResult.get(PlatformTypes.SPOTIFY);
  } else if (tmp(8956)(session_id)) {
    tmpResult = tmp(5041);
    return tmpResult.get(PlatformTypes.CRUNCHYROLL);
  } else if (tmp(12346)(session_id)) {
    return tmp(5041).get(PlatformTypes.XBOX);
  } else if (tmp(12347)(session_id)) {
    return tmp(5041).get(PlatformTypes.PLAYSTATION);
  } else {
    if (!tmp(12361)(session_id)) {
      if (!tmp(12362)(session_id)) {
        const found = tmp(5041).find((name) => name.name === session_id.name);
        let tmp5 = null;
        if (null != found) {
          tmp5 = null;
          if (set.has(found.type)) {
            tmp5 = found;
          }
        }
        return tmp5;
      }
    }
    return tmp(5041).get(PlatformTypes.META_QUEST_OR_HORIZON);
  }
};
