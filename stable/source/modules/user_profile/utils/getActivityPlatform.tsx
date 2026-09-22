// Module ID: 13150
// Function ID: 13151
// Name: getActivityPlatform
// Dependencies: [1074, 13149, 11023, 5364, 8462, 13136, 13137, 13151, 13152, 2]
// Exports: default

// Module 13150 (getActivityPlatform)
import Constants from "Constants" /* 1074 */;
import parseProviderRouteHeadlessSessionIdDefault from "parseProviderRouteHeadlessSessionId" /* 13149 */;
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
  } else if (tmp(11023)(session_id)) {
    return tmp(5364).get(PlatformTypes.SPOTIFY);
  } else if (tmp(8462)(session_id)) {
    return tmp(5364).get(PlatformTypes.CRUNCHYROLL);
  } else if (tmp(13136)(session_id)) {
    return tmp(5364).get(PlatformTypes.XBOX);
  } else if (tmp(13137)(session_id)) {
    return tmp(5364).get(PlatformTypes.PLAYSTATION);
  } else {
    if (!tmp(13151)(session_id)) {
      if (!tmp(13152)(session_id)) {
        const found = tmp(5364).find((name) => name.name === session_id.name);
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
    return tmp(5364).get(PlatformTypes.META_QUEST_OR_HORIZON);
  }
};
