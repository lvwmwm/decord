// Module ID: 13314
// Function ID: 13315
// Name: getActivityPlatform
// Dependencies: [1074, 13313, 11159, 5502, 8619, 13300, 13301, 13315, 13316, 2]
// Exports: default

// Module 13314 (getActivityPlatform)
import Constants from "Constants" /* 1074 */;
import parseProviderRouteHeadlessSessionIdDefault from "parseProviderRouteHeadlessSessionId" /* 13313 */;
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
  } else if (tmp(11159)(session_id)) {
    return tmp(5502).get(PlatformTypes.SPOTIFY);
  } else if (tmp(8619)(session_id)) {
    return tmp(5502).get(PlatformTypes.CRUNCHYROLL);
  } else if (tmp(13300)(session_id)) {
    return tmp(5502).get(PlatformTypes.XBOX);
  } else if (tmp(13301)(session_id)) {
    return tmp(5502).get(PlatformTypes.PLAYSTATION);
  } else {
    if (!tmp(13315)(session_id)) {
      if (!tmp(13316)(session_id)) {
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
