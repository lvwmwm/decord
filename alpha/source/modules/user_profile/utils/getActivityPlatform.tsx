// Module ID: 12760
// Function ID: 12761
// Name: getActivityPlatform
// Dependencies: [1074, 12759, 10519, 5762, 7957, 12746, 12747, 12761, 12762, 2]
// Exports: default

// Module 12760 (getActivityPlatform)
import Constants from "Constants" /* 1074 */;
import parseProviderRouteHeadlessSessionIdDefault from "parseProviderRouteHeadlessSessionId" /* 12759 */;
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
  } else if (tmp(10519)(session_id)) {
    return tmp(5762).get(PlatformTypes.SPOTIFY);
  } else if (tmp(7957)(session_id)) {
    return tmp(5762).get(PlatformTypes.CRUNCHYROLL);
  } else if (tmp(12746)(session_id)) {
    return tmp(5762).get(PlatformTypes.XBOX);
  } else if (tmp(12747)(session_id)) {
    return tmp(5762).get(PlatformTypes.PLAYSTATION);
  } else {
    if (!tmp(12761)(session_id)) {
      if (!tmp(12762)(session_id)) {
        const found = tmp(5762).find((name) => name.name === session_id.name);
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
    return tmp(5762).get(PlatformTypes.META_QUEST_OR_HORIZON);
  }
};
