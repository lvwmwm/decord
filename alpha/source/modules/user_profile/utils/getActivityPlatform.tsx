// Module ID: 12790
// Function ID: 12791
// Name: getActivityPlatform
// Dependencies: [1074, 12789, 10553, 5792, 7987, 12776, 12777, 12791, 12792, 2]
// Exports: default

// Module 12790 (getActivityPlatform)
import Constants from "Constants" /* 1074 */;
import parseProviderRouteHeadlessSessionIdDefault from "parseProviderRouteHeadlessSessionId" /* 12789 */;
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
  } else if (tmp(10553)(session_id)) {
    return tmp(5792).get(PlatformTypes.SPOTIFY);
  } else if (tmp(7987)(session_id)) {
    return tmp(5792).get(PlatformTypes.CRUNCHYROLL);
  } else if (tmp(12776)(session_id)) {
    return tmp(5792).get(PlatformTypes.XBOX);
  } else if (tmp(12777)(session_id)) {
    return tmp(5792).get(PlatformTypes.PLAYSTATION);
  } else {
    if (!tmp(12791)(session_id)) {
      if (!tmp(12792)(session_id)) {
        const found = tmp(5792).find((name) => name.name === session_id.name);
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
    return tmp(5792).get(PlatformTypes.META_QUEST_OR_HORIZON);
  }
};
