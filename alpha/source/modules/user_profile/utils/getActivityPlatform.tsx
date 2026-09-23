// Module ID: 13396
// Function ID: 13397
// Name: getActivityPlatform
// Dependencies: [1074, 13395, 11235, 5586, 8690, 13382, 13383, 13397, 13398, 2]
// Exports: default

// Module 13396 (getActivityPlatform)
import Constants from "Constants" /* 1074 */;
import parseProviderRouteHeadlessSessionIdDefault from "parseProviderRouteHeadlessSessionId" /* 13395 */;
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
  } else if (tmp(11235)(session_id)) {
    return tmp(5586).get(PlatformTypes.SPOTIFY);
  } else if (tmp(8690)(session_id)) {
    return tmp(5586).get(PlatformTypes.CRUNCHYROLL);
  } else if (tmp(13382)(session_id)) {
    return tmp(5586).get(PlatformTypes.XBOX);
  } else if (tmp(13383)(session_id)) {
    return tmp(5586).get(PlatformTypes.PLAYSTATION);
  } else {
    if (!tmp(13397)(session_id)) {
      if (!tmp(13398)(session_id)) {
        const found = tmp(5586).find((name) => name.name === session_id.name);
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
    return tmp(5586).get(PlatformTypes.META_QUEST_OR_HORIZON);
  }
};
