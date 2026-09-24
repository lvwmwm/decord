// Module ID: 13348
// Function ID: 13349
// Name: getActivityPlatform
// Dependencies: [1078, 13347, 11231, 5534, 8652, 13334, 13335, 13349, 13350, 2]
// Exports: default

// Module 13348 (getActivityPlatform)
import Constants from "Constants" /* 1078 */;
import parseProviderRouteHeadlessSessionIdDefault from "parseProviderRouteHeadlessSessionId" /* 13347 */;
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
  } else if (tmp(11231)(session_id)) {
    return tmp(5534).get(PlatformTypes.SPOTIFY);
  } else if (tmp(8652)(session_id)) {
    return tmp(5534).get(PlatformTypes.CRUNCHYROLL);
  } else if (tmp(13334)(session_id)) {
    return tmp(5534).get(PlatformTypes.XBOX);
  } else if (tmp(13335)(session_id)) {
    return tmp(5534).get(PlatformTypes.PLAYSTATION);
  } else {
    if (!tmp(13349)(session_id)) {
      if (!tmp(13350)(session_id)) {
        const found = tmp(5534).find((name) => name.name === session_id.name);
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
    return tmp(5534).get(PlatformTypes.META_QUEST_OR_HORIZON);
  }
};
