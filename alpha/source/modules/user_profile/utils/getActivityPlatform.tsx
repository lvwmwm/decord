// Module ID: 13309
// Function ID: 13310
// Name: getActivityPlatform
// Dependencies: [1074, 13308, 11153, 5500, 8615, 13295, 13296, 13310, 13311, 2]
// Exports: default

// Module 13309 (getActivityPlatform)
import Constants from "Constants" /* 1074 */;
import parseProviderRouteHeadlessSessionIdDefault from "parseProviderRouteHeadlessSessionId" /* 13308 */;
import size from "module_2" /* 2 */;

const PlatformTypes = Constants.PlatformTypes;
const items = [, , , ];
({ LEAGUE_OF_LEGENDS: arr[0], ROBLOX: arr[1], TWITCH: arr[2], YOUTUBE: arr[3] } = PlatformTypes);
const set = new Set(items);
const result = size.fileFinishedImporting("modules/user_profile/utils/getActivityPlatform.tsx");

export default function getActivityPlatform(session_id) {
  const tmp3 = parseProviderRouteHeadlessSessionIdDefault(session_id.session_id);
  if (null != tmp3) {
    return tmp3;
  } else if (tmp(11153)(session_id)) {
    return tmp(5500).get(PlatformTypes.SPOTIFY);
  } else if (tmp(8615)(session_id)) {
    return tmp(5500).get(PlatformTypes.CRUNCHYROLL);
  } else if (tmp(13295)(session_id)) {
    return tmp(5500).get(PlatformTypes.XBOX);
  } else if (tmp(13296)(session_id)) {
    return tmp(5500).get(PlatformTypes.PLAYSTATION);
  } else {
    if (!tmp(13310)(session_id)) {
      if (!tmp(13311)(session_id)) {
        const found = tmp(5500).find((name) => name.name === session_id.name);
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
    return tmp(5500).get(PlatformTypes.META_QUEST_OR_HORIZON);
  }
};
