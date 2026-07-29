// Module ID: 12009
// Function ID: 12010
// Name: PlatformTypes
// Dependencies: [676, 12008, 9079, 4871, 8179, 11993, 11994, 12010, 12011, 2]
// Exports: default

// Module 12009 (PlatformTypes)
import { PlatformTypes } from "ME";
import set from "isListeningOnSpotify";

const items = [, , , ];
({ LEAGUE_OF_LEGENDS: arr[0], ROBLOX: arr[1], TWITCH: arr[2], YOUTUBE: arr[3] } = PlatformTypes);
let set = new Set(items);
const result = set.fileFinishedImporting("modules/user_profile/utils/getActivityPlatform.tsx");

export default function getActivityPlatform(session_id) {
  const importDefault = session_id;
  const tmp3 = importDefault(12008)(session_id.session_id);
  if (null != tmp3) {
    return tmp3;
  } else if (tmp(9079)(session_id)) {
    let tmpResult = tmp(4871);
    return tmpResult.get(PlatformTypes.SPOTIFY);
  } else if (tmp(8179)(session_id)) {
    tmpResult = tmp(4871);
    return tmpResult.get(PlatformTypes.CRUNCHYROLL);
  } else if (tmp(11993)(session_id)) {
    return tmp(4871).get(PlatformTypes.XBOX);
  } else if (tmp(11994)(session_id)) {
    return tmp(4871).get(PlatformTypes.PLAYSTATION);
  } else {
    if (!tmp(12010)(session_id)) {
      if (!tmp(12011)(session_id)) {
        const found = tmp(4871).find((name) => name.name === session_id.name);
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
    return tmp(4871).get(PlatformTypes.META_QUEST_OR_HORIZON);
  }
};
