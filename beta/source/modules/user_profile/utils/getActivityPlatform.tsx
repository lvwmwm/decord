// Module ID: 12590
// Function ID: 12591
// Name: getActivityPlatform
// Dependencies: [1074, 12589, 10350, 5595, 7792, 12576, 12577, 12591, 12592, 2]
// Exports: default

// Module 12590 (getActivityPlatform)
import Constants from "Constants" /* 1074 */;
import parseProviderRouteHeadlessSessionIdDefault from "parseProviderRouteHeadlessSessionId" /* 12589 */;
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
  } else if (tmp(10350)(session_id)) {
    return tmp(5595).get(PlatformTypes.SPOTIFY);
  } else if (tmp(7792)(session_id)) {
    return tmp(5595).get(PlatformTypes.CRUNCHYROLL);
  } else if (tmp(12576)(session_id)) {
    return tmp(5595).get(PlatformTypes.XBOX);
  } else if (tmp(12577)(session_id)) {
    return tmp(5595).get(PlatformTypes.PLAYSTATION);
  } else {
    if (!tmp(12591)(session_id)) {
      if (!tmp(12592)(session_id)) {
        const found = tmp(5595).find((name) => name.name === session_id.name);
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
    return tmp(5595).get(PlatformTypes.META_QUEST_OR_HORIZON);
  }
};
