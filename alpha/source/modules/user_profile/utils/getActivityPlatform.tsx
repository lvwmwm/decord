// Module ID: 12555
// Function ID: 12556
// Name: getActivityPlatform
// Dependencies: [1074, 12554, 10339, 5590, 7784, 12541, 12542, 12556, 12557, 2]
// Exports: default

// Module 12555 (getActivityPlatform)
import Constants from "Constants" /* 1074 */;
import parseProviderRouteHeadlessSessionIdDefault from "parseProviderRouteHeadlessSessionId" /* 12554 */;
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
  } else if (tmp(10339)(session_id)) {
    return tmp(5590).get(PlatformTypes.SPOTIFY);
  } else if (tmp(7784)(session_id)) {
    return tmp(5590).get(PlatformTypes.CRUNCHYROLL);
  } else if (tmp(12541)(session_id)) {
    return tmp(5590).get(PlatformTypes.XBOX);
  } else if (tmp(12542)(session_id)) {
    return tmp(5590).get(PlatformTypes.PLAYSTATION);
  } else {
    if (!tmp(12556)(session_id)) {
      if (!tmp(12557)(session_id)) {
        const found = tmp(5590).find((name) => name.name === session_id.name);
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
    return tmp(5590).get(PlatformTypes.META_QUEST_OR_HORIZON);
  }
};
