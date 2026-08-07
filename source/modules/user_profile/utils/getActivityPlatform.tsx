// Module ID: 12224
// Function ID: 12225
// Name: PlatformTypes
// Dependencies: [676, 12223, 9589, 4998, 8847, 12208, 12209, 12225, 12226, 2]
// Exports: default

// Module 12224 (PlatformTypes)
import { PlatformTypes } from "ME";
import set from "isListeningOnSpotify";

const items = [, , , ];
({ LEAGUE_OF_LEGENDS: arr[0], ROBLOX: arr[1], TWITCH: arr[2], YOUTUBE: arr[3] } = PlatformTypes);
let set = new Set(items);
const result = set.fileFinishedImporting("modules/user_profile/utils/getActivityPlatform.tsx");

export default function getActivityPlatform(session_id) {
  const importDefault = session_id;
  const tmp3 = importDefault(12223)(session_id.session_id);
  if (null != tmp3) {
    return tmp3;
  } else if (tmp(9589)(session_id)) {
    let tmpResult = tmp(4998);
    return tmpResult.get(PlatformTypes.SPOTIFY);
  } else if (tmp(8847)(session_id)) {
    tmpResult = tmp(4998);
    return tmpResult.get(PlatformTypes.CRUNCHYROLL);
  } else if (tmp(12208)(session_id)) {
    return tmp(4998).get(PlatformTypes.XBOX);
  } else if (tmp(12209)(session_id)) {
    return tmp(4998).get(PlatformTypes.PLAYSTATION);
  } else {
    if (!tmp(12225)(session_id)) {
      if (!tmp(12226)(session_id)) {
        const found = tmp(4998).find((name) => name.name === session_id.name);
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
    return tmp(4998).get(PlatformTypes.META_QUEST_OR_HORIZON);
  }
};
