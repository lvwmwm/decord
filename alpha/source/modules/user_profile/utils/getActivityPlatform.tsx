// Module ID: 12799
// Function ID: 12800
// Name: getActivityPlatform
// Dependencies: [1074, 12798, 10545, 5781, 7974, 12785, 12786, 12800, 12801, 2]
// Exports: default

// Module 12799 (getActivityPlatform)
import Constants from "Constants" /* 1074 */;
import parseProviderRouteHeadlessSessionIdDefault from "parseProviderRouteHeadlessSessionId" /* 12798 */;
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
  } else if (tmp(10545)(session_id)) {
    return tmp(5781).get(PlatformTypes.SPOTIFY);
  } else if (tmp(7974)(session_id)) {
    return tmp(5781).get(PlatformTypes.CRUNCHYROLL);
  } else if (tmp(12785)(session_id)) {
    return tmp(5781).get(PlatformTypes.XBOX);
  } else if (tmp(12786)(session_id)) {
    return tmp(5781).get(PlatformTypes.PLAYSTATION);
  } else {
    if (!tmp(12800)(session_id)) {
      if (!tmp(12801)(session_id)) {
        const found = tmp(5781).find((name) => name.name === session_id.name);
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
    return tmp(5781).get(PlatformTypes.META_QUEST_OR_HORIZON);
  }
};
