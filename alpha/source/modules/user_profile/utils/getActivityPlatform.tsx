// Module ID: 13405
// Function ID: 13406
// Name: getActivityPlatform
// Dependencies: [1074, 13404, 11241, 5588, 8694, 13391, 13392, 13406, 13407, 2]
// Exports: default

// Module 13405 (getActivityPlatform)
import Constants from "Constants" /* 1074 */;
import parseProviderRouteHeadlessSessionIdDefault from "parseProviderRouteHeadlessSessionId" /* 13404 */;
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
  } else if (tmp(11241)(session_id)) {
    return tmp(5588).get(PlatformTypes.SPOTIFY);
  } else if (tmp(8694)(session_id)) {
    return tmp(5588).get(PlatformTypes.CRUNCHYROLL);
  } else if (tmp(13391)(session_id)) {
    return tmp(5588).get(PlatformTypes.XBOX);
  } else if (tmp(13392)(session_id)) {
    return tmp(5588).get(PlatformTypes.PLAYSTATION);
  } else {
    if (!tmp(13406)(session_id)) {
      if (!tmp(13407)(session_id)) {
        const found = tmp(5588).find((name) => name.name === session_id.name);
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
    return tmp(5588).get(PlatformTypes.META_QUEST_OR_HORIZON);
  }
};
