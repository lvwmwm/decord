// Module ID: 13312
// Function ID: 13313
// Name: getActivityPlatform
// Dependencies: [1078, 13311, 11195, 5502, 8620, 13298, 13299, 13313, 13314, 2]
// Exports: default

// Module 13312 (getActivityPlatform)
import Constants from "Constants" /* 1078 */;
import parseProviderRouteHeadlessSessionIdDefault from "parseProviderRouteHeadlessSessionId" /* 13311 */;
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
  } else if (tmp(11195)(session_id)) {
    return tmp(5502).get(PlatformTypes.SPOTIFY);
  } else if (tmp(8620)(session_id)) {
    return tmp(5502).get(PlatformTypes.CRUNCHYROLL);
  } else if (tmp(13298)(session_id)) {
    return tmp(5502).get(PlatformTypes.XBOX);
  } else if (tmp(13299)(session_id)) {
    return tmp(5502).get(PlatformTypes.PLAYSTATION);
  } else {
    if (!tmp(13313)(session_id)) {
      if (!tmp(13314)(session_id)) {
        const found = tmp(5502).find((name) => name.name === session_id.name);
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
    return tmp(5502).get(PlatformTypes.META_QUEST_OR_HORIZON);
  }
};
